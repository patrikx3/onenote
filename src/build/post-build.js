const fs = require('fs-extra')
const exec = require('./lib').exec
const globby = require('globby')
const yaml = require('yaml')
const sha512 = require('./lib').sha512

const run = async() => {

    const originalDir = process.cwd()

    const dirname = originalDir + '/' + 'dist'

    const githubToken = fs.readFileSync(`${originalDir}/secure/token.txt`)
    const GitHub = require('github-api');
    var gh = new GitHub({
        username: 'p3x-robot',
        token: githubToken
        /* also acceptable:
           token: 'MY_OAUTH_TOKEN'
         */
    });
    const pkg = require('../../package')
    const repo = await gh.getRepo('patrikx3', pkg.corifeus.reponame)


    const releases = await repo.listReleases()


    const assetsUploads = [
          'latest-linux.yml',
          'latest-linux-ia32.yml',
    ]


    const upload_url = releases.data[0].upload_url.replace('{?name,label}', '')

    for (let uploadAsset of assetsUploads) {

        const files = await globby('./dist/*.AppImage')

        for (let file of files) {
            let ymlFile

            if (file.includes('i386')) {
                ymlFile = `${process.cwd()}/dist/latest-linux-ia32.yml`
            } else {
                ymlFile = `${process.cwd()}/dist/latest-linux.yml`
            }
            let  ymlData = yaml.parse(fs.readFileSync(ymlFile).toString())
            const sha512Data = sha512(file)
            ymlData.files[0].sha512 = sha512Data
            ymlData.sha512 = sha512Data
            ymlData = yaml.stringify(ymlData)
            //console.log(sha512Data, ymlData)
            fs.writeFileSync(ymlFile, ymlData)
        }

        const args = [
            `--request POST`,
            `--data-binary @${dirname + '/' + uploadAsset}`,
            `-H "Authorization: token ${githubToken}"`,
            `-H "Content-Type: application/octet-stream"`,
            `${upload_url}?name=${uploadAsset}`,
            //``,
        ]
        if (uploadAsset.endsWith('yml')) {
            await exec('cat', [
                dirname + '/' + uploadAsset
            ])
        }
        console.info('curl args', args)
        await exec('curl', args)
    }

}

run()
