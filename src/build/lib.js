
const {spawn} = require('child_process')

const exec = async function exec(cmd, args = []) {
    const child = spawn(cmd, args, {shell: true})
    redirectOutputFor(child)
    await waitFor(child)
}

const redirectOutputFor = (child) => {
    const printStdout = (data) => {
        process.stdout.write(data.toString())
    }
    const printStderr = (data) => {
        process.stderr.write(data.toString())
    }
    child.stdout.on('data', printStdout)
    child.stderr.on('data', printStderr)

    child.once('close', () => {
        child.stdout.off('data', printStdout)
        child.stderr.off('data', printStderr)
    })
}

const waitFor = async function (child) {
    return new Promise((resolve) => {
        child.once('close', () => resolve())
    })
}

const execSync = require('child_process').execSync

const sha512 =  (filename) => {
    const output = execSync(`sha512sum ${filename} | cut -f1 | xxd -r -p | base64`)
    //console.log(output)
    let sha512 = output.toString().split('\n').join('').trim()
    //sha512 = sha512.substring(0, sha512.length - 1)
    //console.log(sha512)
    return sha512
}

module.exports.sha512 = sha512

module.exports.exec = exec
