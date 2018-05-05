const removeCookies = (webview) => {
    let session = webview.getWebContents().session;
    session.cookies.get({}, async function(error, cookies) {
        if (error) {
            alert(error.message);
            console.error(error);
            return;
        };
        for (var i = cookies.length - 1; i >= 0; i--) {
            const cookie = cookies[i];
            let domain = cookie.domain;
            if (domain.startsWith('.')) {
                domain = domain.substring(1);
            }
            const url = "http" + (cookie.secure ? "s" : "") + "://" + domain  + cookie.path;
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
            const promises = [];

            promises.push(
                new Promise((resolve) => {
                    session.cookies.remove(url, name, function (error) {
                            if (error) {
                                alert(error.message);
                                console.error(error);
                                return;
                            };
                            resolve();
                            console.log('cookie delete : ', cookie.name);
                        }
                    );
                })
            )
            await Promise.all(promises);
            webview.reload();
        };
    });
}

module.exports = removeCookies;