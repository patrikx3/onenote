[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-onenote.svg)](https://www.npmjs.com/package/p3x-onenote)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://stats.uptimerobot.com/9ggnzcWrw)





# 📚 P3X OneNote Linux v2024.10.108



**Bugs are evident™ - MATRIX️**
    



### NodeJS LTS is supported

### Built on NodeJs version

```txt
v22.4.0
```





# Description

                        
[//]: #@corifeus-header:end

A Linux compatible version of OneNote.
  
![Screenshot 1](https://cdn.corifeus.com/git/onenote/artifacts/screenshot/screenshot-2024.png)
  

# Main Features

P3X OneNote Linux is, actually, an independent browser window for the online OneNote. You can use this program without having to clutter your browser. The main functions are:
* that is independent from any browser, as it works in it's own process
* it provides a tray, that allows you to close your browser while it keeps running in the tray
* the data is cached and is faster than always opening a new window
* it allows you to sign in with the corporate or the personal login
* when there is a new update, it auto updates itself
* the program allows to use other Microsoft online applications, but the dedicated purpose is to use OneNote

## Detailed Feature Information

* Dark mode is implemented through a non-official workaround, which may result in some inconsistencies since it's not directly supported by Microsoft.
* Press ALT to access the menu.
* The desktop has a menu system.
* Use the `--minimized` argument to launch the application with the window minimized.
* Window zoom functionality is available.
* An application icon is present.
* A bottom bar is included:
    * It displays the current URL.
    * Clicking on this bar copies the URL to the clipboard.
* A new option is available in the Edit menu:
    * "Copy this location to the clipboard," duplicating the function available in the bottom bar.
* A restart button is provided to clear the cache, useful for resolving errors and logging in again.
* The application remembers the last opened notebook to the extent permitted by Online OneNote.
* Under Menu > Settings:
    * "Close to the tray" option:
        * When checked, minimizes the application to the tray rather than exiting.
        * When unchecked, the application closes completely on pressing the quit button.
* Proxy settings can be adjusted in the settings menu.
* A new menu item, `Corporate home`, is added:
    * Note: Without a `Corporate` login, it is impossible to debug this feature. If issues arise, providing your login details may allow for troubleshooting.
* The language for OneNote is managed by Microsoft; efforts are made to support multiple languages through the Electron UI:
    * Language translation resources are available at:
        * [Patrikx3 OneNote Translation GitHub](https://github.com/patrikx3/onenote/tree/master/src/translation)
* Support for multiple instances is available, though with limitations:
    * Configuration synchronization issues may arise when running multiple instances simultaneously. To avoid discrepancies, configure using a single instance, exit, and then initiate multiple instances.
    * Using multiple instances is possible but not recommended, though it was added based on user requests.

<!-- (`````~/.local/share/applications/p3x-onenote.desktop`````) -->


# Releases / Downloadable installer
  
https://github.com/patrikx3/onenote/releases  
  


## Snap  
  
[![LINK](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/p3x-onenote#cory-non-external)

## Flathub
  

    
You download from the releases page and install as:
  
```sh
wget https://github.com/patrikx3/onenote/releases/download/v${VERSION}/P3X-OneNote-${VERSION}-x86_64.flatpak
flatpak install ./P3X-OneNote-${VERSION}-x86_64.flatpak
flatpak run com.patrikx3.onenote
```

Besides the menu is integrated.
 
## AppImage, deb, rpm

AppImage, dep and rpm auto update itself.  
     
#### To integrate into the menu in AppImage
Execute:
```bash
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt-get update
sudo apt-get install appimagelauncher
```

#### After downloading the ```AppImage```, make it an executable.
```bash
mkdir -p $HOME/opt
mv ~/Downloads/p3x-onenote-a.b.c-x86_64.AppImage $HOME/opt/
chmod +x $HOME/opt/p3x-onenote-a.b.c-x86_64.AppImage
# Then you can run it
$HOME/opt/p3x-onenote-a.b.c-x86_64.AppImage &
```

<!--
It then actually integrates itself into the menus and it will auto update itself.

(The GitHub versions are always instant, while the ElectronJs Apps releases are delayed.)    
-->
  
The app can be found on [ElectronJs Apps](https://electronjs.org/apps) and search for `P3X`, you will find it.

## Windows
It was a request to build a Windows version. [Issue 168](https://github.com/patrikx3/onenote/issues/169)

## MacOS Compatibility
Our application supports builds for both Intel and Apple Silicon architectures.

<!--

### Handling Downloaded Files from GitHub
Although I'm not an Apple expert, if you download the `zip` file for the `arm64` version, you'll need to execute the following command on the unzipped app to remove the quarantine attribute applied by macOS:

```bash
sudo xattr -rd com.apple.quarantine P3X-OneNote.app
```

This command ensures that your system trusts the application, allowing it to run smoothly without security interruptions from macOS.
-->

<!--

If you want to install it on NodeJs instead of the AppImage, it is deprecated, but available [here](https://github.com/patrikx3/onenote/blob/c78e77c540e21b89e0e063cd50a10707faae722e/README.md#cli-install)

## Important Note

Check the ```Keep me signed in``` checkbox when entering your password then choose any page (but not a notebook) after logging in. This will keep you logged in.


**Do not install this app using the Command Line Interface (CLI) as it is deprecated**

The ```CLI``` installation does not always work due the updating of Linux distros.  Is is possible the ```configstore``` only works with ```sudo```, so use the ```released``` ```AppImage``` instead!

Installation of ```NodeJs``` is not necessary since the ```AppImage``` includes all dependencies.

```bash
# If this weird NPM error is encountered, do the following:
node -v
# make sure the node version is above 8.9.0
sudo npm install -g p3x-onenote --unsafe-perm=true --allow-root
p3x-onenote
```

Logout and relogin, and a menu will now appear.
-->

## If you are a NodeJs Ninja

[You want to install via NPM...](artifacts/npm.md)

# Change log
[Read change log](change-log.md)


<!--

# Issues

#### Corporate login
The corporate login is unstable, either it works or not. Only the personal account that I can provide some minimal support.

#### Suspend/Sleep/Wake up
I recognized, that after suspend/sleep and then wake up, the app is not saving the pages anymore. For now, the solution is, that after wake up, restart the app.

#### Not working on SNAP on some versions
Usually, on stable distros are working with SNAP, but usually non stable Linux distros could not work. Please, try using the `AppImage`, that is usually better than SNAP.

#### Error in auto-updater: Redirect was cancelled
Sometimes, you get an `AppImage` error for update, just download the latest release and replace the `AppImage` from here:  
https://github.com/patrikx3/onenote/releases

#### Rasberry and ARM is experimental
I have no ARM computer to test it out, I could build `AppImage` on ARM, but I have no idea if has an error, it crashes or it works.

#### Tray issues
It is possible, that the tray is not working, it is an upstream issue!

#### Not loading the pages / freezes
Sometimes, it is possible, that OneNote Online does not load properly or freezes, the solutions is to quit and start the program again. (I know, you won't like it at all! 😡) 


## Unable to log in

This only happens if you kill ```P3X OneNote Linux``` and then relogin many times. So, If the program needs to be killed often, ```sign out``` (on the top right of the Electron browser frame) just to be safe.

### BUT!

**Exiting using ```quit``` from the ```p3x-onenote``` menu or the tray, will prevent the problem.**


#### Online OneNote Change language

Although the main page's language can be changed, it reverts back when an actual page is accessed.
This is being investigated.

https://github.com/patrikx3/onenote/issues/14

#### Electron problem
🐞 Since Electron v3, the tray left click is executing as the right click, Electron bug.    
  
https://github.com/patrikx3/onenote/issues/38  

#### Fedora

https://github.com/patrikx3/onenote/issues/3#issuecomment-312711801
    
-->

# Development

For file names do not use camelCase, but use kebab-case. Folder should be named as kebab-case as well. As you can see, all code filenames are using it like that, please do not change that.
Please apply the `.editorconfig` settings in your IDE.

For generating `rpm` on `Ubuntu` distro, you can use:
```bash
sudo apt-get install rpm
```
  
If you try to build the app with NPM, you have to change from `electron` `devDependencies` to `dependencies`, this is because it is created to be able to run this app from `AppImage` instead of an `NPM`.
  
# URL links


[P3X OneNote Linux playground](https://www.patrikx3.com/en/front/playground/13/p3x-linux-onenote#PG13)  
  
[Corifeus P3X OneNote Linux](https://corifeus.com/onenote/)  

[AlternativeTo OneNote Linux](https://alternativeto.net/software/p3x-onenote/)  

[NPM P3X OneNote](https://www.npmjs.com/package/p3x-onenote)

[Snap Store](https://snapcraft.io/p3x-onenote)

[Github.IO Page](https://patrikx3.github.io/onenote/)

[//]: #@corifeus-footer

---


## Support Our Open-Source Project ❤️
If you appreciate our work, consider starring this repository or making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!

### Server Availability
Our server may occasionally be down, but please be patient. Typically, it will be back online within 15-30 minutes. We appreciate your understanding.

### About My Domains
All my domains, including [patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.

### Versioning Policy
**Version Structure:** We follow a Major.Minor.Patch versioning scheme:
- **Major:** Corresponds to the current year.
- **Minor:** Set as 4 for releases from January to June, and 10 for July to December.
- **Patch:** Incremental, updated with each build.

**Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-ONENOTE**](https://corifeus.com/onenote) Build v2024.10.108

 [![NPM](https://img.shields.io/npm/v/p3x-onenote.svg)](https://www.npmjs.com/package/p3x-onenote)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end


