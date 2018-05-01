const electron =require('electron');
const fs = require('fs');
const shell = electron.shell;
const ipc = electron.ipcRenderer;
const remote = electron.remote;

/*
const cssPath = __dirname + '/css/onenoteStyles/onenote.css';
const BrowserWindow =  electron.BrowserWindow;

fs.readFile(cssPath, 'utf-8', function(err, data) {
	if (err) {
		console.log(err);
    }
	window.cssData = data;
	console.log("loaded css");
});
*/

const data = {
	url: ''
};

window.electronWindowSetup = function() {

    ipc.on('p3x-onenote-onload-user', function(event, data) {
    	if (data !== null && data !== undefined) {
    		if (data.hasOwnProperty('url')) {
				webview.src = data.url;
			}
		}
    })

	ipc.on('p3x-onenote-action', function(event, data) {
		switch (data.action) {
            case 'focus':
                if (webview !== undefined) {
                    webview.focus()
                }
                break;

			case 'restart':
                const session = webview.getWebContents().session;
                session.clearStorageData(() => {
                    console.log('storage cleared');
                    webview.reload();
				})
                break;

            case 'home':
                webview.src = 'https://www.onenote.com/notebooks'
                break;

            case 'corporate':
                webview.src = 'https://www.onenote.com/notebooks?auth=2&auth_upn=my_corporate_email_address'
                break;
		}
	})

    const webview = document.getElementById("p3x-onenote-webview");

    webview.focus()

    /*
	webview.addEventListener('did-stop-loading', function(event) {
//		webview.insertCSS(window.cssData);
	});
	*/

    webview.addEventListener('did-navigate', function(event, url) {
    	data.url = webview.src;
        ipc.send('p3x-onenote-save', data);
    });

	webview.addEventListener('new-window', function(event) {
	    if (/https?:\/\/(www\.)?onenote\.com/.test(event.url)) {
            webview.src = event.url;
        } else {
            shell.openExternal(event.url);
        }
	});

    ipc.send('did-finish-load');

	/*
	document.getElementById('openConsoleBtn').addEventListener('click', function(event) {
		BrowserWindow.getFocusedWindow().webContents.openDevTools();
	});

	document.getElementById('min-btn').addEventListener('click', function(event) {
		BrowserWindow.getFocusedWindow().minimize();
	});

	document.getElementById('max-btn').addEventListener('click', function(event) {
		BrowserWindow.getFocusedWindow().maximize();
	});

	// use an IPC for this one so we can get the window state and save it to a file before it closes
	document.getElementById('close-btn').addEventListener('click', function(event) {
		ipc.send('appClose');
	});
	*/
}

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

