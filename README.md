[//]: #@corifeus-header

[![NPM](https://nodei.co/npm/p3x-onenote.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/p3x-onenote/)

  

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Build Status](https://api.travis-ci.com/patrikx3/onenote.svg?branch=master)](https://travis-ci.com/patrikx3/onenote)
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)

 [![Backers on Open Collective](https://opencollective.com/p3x-onenote/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/p3x-onenote/sponsors/badge.svg)](#sponsors)



# 📚 P3X OneNote Linux v2020.4.181



**Bugs are evident™ - MATRIX️**
    





# Description

                        
[//]: #@corifeus-header:end



A Linux compatible version of OneNote

![Screenshot 1](https://cdn.corifeus.com/git/onenote/artifacts/screenshot/screenshot-2019.png)

## Warning

#### Suspend/Sleep/Wake up
I recognized, that after suspend/sleep and then wake up, the app is not saving the pages anymore. For now, the solution is, that after wake up, restart the app.

#### Not working on SNAP on some versions
Usually, on stable distros are working with SNAP, but usually non stable Linux distros could not work. Please, try using the `AppImage`, that is usually better than SNAP.

#### Tray issues
It is possible, that the tray is not working, it is an upstream issue!
    
For me, on Linux Mint, is only working, if I am using the `AppImage`, and have `System Settings` -> `General` -> `Enable support for indicators`.
  
Snap is working on Linux Mint as well, except the tray....

I only test Linux Mint, help is welcome!

#### Error in auto-updater: Redirect was cancelled  
Sometimes, you get an `AppImage` error for update, just download the latest release and replace the `AppImage` from here:  
https://github.com/patrikx3/onenote/releases

#### Rasberry and ARM is experimental
I have no ARM computer to test it out, I could build `AppImage` on ARM, but I think, it is required to add an argument to the program with the `--no-sandbox` argument.

# Downloadable installer

## Snap

<!--
The main source installer is the `AppImage`, so, the themes are not implemented (the main menus). If you want the themes to be implemented (dark vs light), I suggest using the `AppImage` as it supports the themes natively. Besides, the auto self update function is not implemented in `Snap`, only in `AppImage` version.  
-->

[![LINK](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/p3x-onenote#cory-non-external)

## AppImage

https://github.com/patrikx3/onenote/releases

After downloading the ```AppImage```, make it an executable.
```bash
mkdir -p $HOME/opt
mv ~/Downloads/p3x-onenote-a.b.c-x86_64.AppImage $HOME/opt/
chmod +x $HOME/opt/p3x-onenote-a.b.c-x86_64.AppImage
# Then you can run it
$HOME/opt/p3x-onenote-a.b.c-x86_64.AppImage &
```

It then actually integrates itself into the menus and it will auto update itself.

<!--
(The GitHub versions are always instant, while the ElectronJs Apps releases are delayed.)    
-->
  
The app can be found on [ElectronJs Apps](https://electronjs.org/apps/p3x-onenote)

[Change log](changelog.md)


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

# Original version
https://github.com/peterforgacs/electron-onenote

Props for Peter Forgacs! 😎

# Main Features

P3X OneNote Linux is, actually, an independent browser window for the online OneNote. You can use this program without having to clutter your browser. The main functions are:
* that is independent from any browser, as it works in it's own process
* it provides a tray, that allows you to close your browser while it keeps running in the tray
* the data is cached and is faster than always opening a new window
* it allows you to sign in with the corporate or the personal login
* when there is a new update, it auto updates itself (Only in the `AppImage` version.)
* the program allows to use other Microsoft online applications, but the dedicated purpose is to use OneNote

## Verbose feature info

* Desktop menu 
* Icon
* There is a bottom bar
  * It shows the current location
  * When you click on this bar, the location URL is copied into the clipboard
* There is a new button on the Edit menu
  * Copy this location to the clipboard
    * This is the same function that is on the bottom bar when you click on it
* Restart button (empty your cache, you can login again if there is an error)
* Remember last notebook (as much Online Onenote allows ...)
* Menu > Settings 
  * Close to the tray 
    * If checked, will minimize to the tray instead of quit
    * If un-checked, default quit close button behaviour (quit the app)
* You are able to set a proxy in the settings menu.
* There is now a menu called `Corporate home`
  * Given, I do not have a `Corporate` login, I cannot debug it at all.
    * If something is not working, the only way is to provide your login and I could probably fix it. Otherwise, I see nothing.
* The OneNote language is controlled by Microsoft, and we try to work with Online OneNote, but we are getting a hard time, but the Electron UI is now able to use any language.
  * You can translate any language @
    * https://github.com/patrikx3/onenote/tree/master/src/translation
* Allows using multiple instances (with some quirks, as the config will not be synchronized using multiple instances at once, so it can provide wrong results - to make it to work, configure with 1 instance, exit, then use multiple instances).
  * Multiple instances is not recommended (it was requested and provided).

<!-- (`````~/.local/share/applications/p3x-onenote.desktop`````) -->

# Issues

## Not loading the pages / freezes
Sometimes, it is possible, that OneNote Online does not load properly or freezes, the solutions is to quit and start the program again. (I know, you won't like it at all! 😡) 

<!--
## Unable to log in

This only happens if you kill ```P3X OneNote Linux``` and then relogin many times. So, If the program needs to be killed often, ```sign out``` (on the top right of the Electron browser frame) just to be safe.

### BUT!

**Exiting using ```quit``` from the ```p3x-onenote``` menu or the tray, will prevent the problem.**

-->

## Online OneNote Change language

Although the main page's language can be changed, it reverts back when an actual page is accessed.
This is being investigated.

https://github.com/patrikx3/onenote/issues/14

## Electron problem
🐞 Since Electron v3, the tray left click is executing as the right click, Electron bug.    
  
https://github.com/patrikx3/onenote/issues/38  

## Fedora

https://github.com/patrikx3/onenote/issues/3#issuecomment-312711801
    
# Development

For file names do not use camelCase, but use kebab-case. Folder should be named as kebab-case as well. As you can see, all code filenames are using it like that, please do not change that.
Please apply the `.editorconfig` settings in your IDE.

If you try to build the app with AppImage, you have to change from `electron` `dependencies` to `devDependencies`, this is because it is created to be able to run this app from `NPM` instead of an `AppImage`.

# URL links


[P3X OneNote Linux playground](https://www.patrikx3.com/en/front/playground/14/p3x-linux-onenote#PG14)  
  
[Corifeus P3X OneNote Linux](https://corifeus.com/onenote/)  

[AlternativeTo OneNote Linux](https://alternativeto.net/software/p3x-onenote/)  

[NPM P3X OneNote](https://www.npmjs.com/package/p3x-onenote)

[Snap Store](https://snapcraft.io/p3x-onenote)

[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-ONENOTE**](https://corifeus.com/onenote) Build v2020.4.181

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




# Open collective

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/patrikx3/onenote/graphs/contributors"><img src="https://opencollective.com/p3x-onenote/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers!

🙏 [Become a backer](https://opencollective.com/p3x-onenote#backer)

<a href="https://opencollective.com/p3x-onenote#backers" target="_blank"><img src="https://opencollective.com/p3x-onenote/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

🙏 [Become a sponsor](https://opencollective.com/p3x-onenote#sponsor)

<a href="https://opencollective.com/p3x-onenote/sponsor/0/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/1/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/2/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/3/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/4/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/5/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/6/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/7/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/8/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/p3x-onenote/sponsor/9/website" target="_blank"><img src="https://opencollective.com/p3x-onenote/sponsor/9/avatar.svg"></a>



[//]: #@corifeus-footer:end



