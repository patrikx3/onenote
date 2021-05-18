const remote = require('@electron/remote')

const removeCookies = async(webview) => {
    //let session = webview.getWebContents().session;
    let session = remote.webContents.fromId(webview.getWebContentsId()).session
    try {
        const cookies = await session.cookies.get({});
        for (var i = cookies.length - 1; i >= 0; i--) {
            const cookie = cookies[i];
            let domain = cookie.domain;
            if (domain.startsWith('.')) {
                domain = domain.substring(1);
            }
            const url = "http" + (cookie.secure ? "s" : "") + "://" + domain + cookie.path;
            console.info(`
cookie.domain: ${cookie.domain}
cookie.hostOnly: ${cookie.hostOnly}
cookie.httpOnly: ${cookie.httpOnly}
cookie.name: ${cookie.name}
cookie.path: ${cookie.path}
cookie.secure: ${cookie.secure}
cookie.session: ${cookie.session}
cookie.value: ${cookie.value}
url: ${url}
                        `);
            try {
                await session.cookies.remove(url, name)
                console.log('cookie delete : ', cookie.name);
            } catch(error) {
                alert(error.message);
                console.error(error);
            }
        }
        webview.reload();
    } catch(error) {
        alert(error.message);
        console.error(error);
    }
}

module.exports = removeCookies;
