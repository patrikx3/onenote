const electron =require('electron');
const fs = require('fs');
const shell = electron.shell;
const ipc = electron.ipcRenderer;
const remote = electron.remote;

const cssPath = __dirname + '/css/onenoteStyles/onenote.css';
let cssData;

const BrowserWindow =  electron.BrowserWindow;

fs.readFile(cssPath, 'utf-8', function(err, data) {
	if (err) {
		console.log(err);
    }
	cssData = data;
	window.cssData = cssData;
	console.log("set data");
});

const data = {
	url: ''
};

window.electronWindowSetup = function() {

    ipc.on('onload-user', function(event, data) {
    	if (data !== null && data !== undefined) {
    		if (data.hasOwnProperty('url')) {
				webview.src = data.url;
			}
		}
    })

	ipc.on('action', function(event, data) {
		switch (data.action) {
			case 'restart':
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


                break;
		}
	})

    const webview = document.getElementById("onenote-webview");
	webview.addEventListener('did-stop-loading', function(event) {
		webview.insertCSS(window.cssData);
	});

    webview.addEventListener('did-navigate', function(event, url) {
    	data.url = webview.src;
        ipc.send('save', data);
    });

	webview.addEventListener('new-window', function(event) {
		shell.openExternal(event.url);
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
