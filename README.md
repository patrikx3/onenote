[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-onenote.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-onenote/)

  [![Build Status](https://travis-ci.org/patrikx3/onenote.svg?branch=master)](https://travis-ci.org/patrikx3/onenote)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/onenote/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/onenote/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/onenote/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/onenote/?branch=master) [![Backers on Open Collective](https://opencollective.com/p3x-onenote/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/p3x-onenote/sponsors/badge.svg)](#sponsors) 


 
# 📚 P3X Onenote Linux v1.4.42-532  

This is an open-source project. Star this repository if you like it, or even donate!  Thank you so much! :)

I run my own server with dynamic IP address so it may happen that the server can not be reachable for about max 15 minutes due to the dynamic DNS. The server may also be unreachable when I backup the SSD with Clonzilla (very rarely) or an electrical issue (but this should not happen again). When the server is down, please hang on for 15-30 minutes and the server will be back up.

All my domains (patrikx3.com and corifeus.com) could have errors since I am developing in my free time. However, it is usually stable.


    



# Description  

                        
[//]: #@corifeus-header:end

A Linux compatible version of OneNote


![Screenshot 1](https://cdn.corifeus.com/git/onenote/artifacts/screenshot/1.png)

# Downloadable installer

https://github.com/patrikx3/onenote/releases

After downloading the ```AppImage```, make it an executable.
```bash
sudo mkdir -p /opt
sudo mv ~/Downloads/p3x-onenote-a.b.c-d-x86_64.AppImage /opt/p3x-onenote
sudo chmod +x /opt/p3x-onenote
# Then you can run it
/opt/p3x-onenote &
```

The app can also be found on [Atom Apps](https://electron.atom.io/apps/?q=onenote)

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

[readme](artifacts/npm.md)

# Original version

https://github.com/peterforgacs/electron-onenote

Props for Peter Forgacs! 😎

# Features

## Important 🤔

Right now, do not click the P3X Linux Onenote launcher multiple times, because it will spawn multiple copies and the Online Onenote limits the logins.  I didn't have enough time to implement properly this function (so, when you click the launcher, it should not spawn a new P3X Onenote window, but just show the existing window), but I had issues, so, I removed this Electron singleton spawn function, but once it will works, it will be released.

## Default features

* GNOME menu <!-- (`````~/.local/share/applications/p3x-onenote.desktop`````) -->
* Icon
* Restart button (empty your cache, you can login again if there is an error)
* Remember last notebook (as much Online Onenote allows ...)
* Menu > Settings 
  * Enable hiding the main window
    * If you access the tray easy, by 1 click, use this
  * **Disable hiding the main window**
    * If you have nested tray or not showing the tray, use this
    * **THIS IS THE DEFAULT AS IS THE FALLBACK**
* Tray - show / hide by 1 click and hide the window list
  * If in the Settings menu, you set the **Enable hiding the main window** option, you can hide the window list and only show the tray, give you more space (but some Linux distros are not like Linux Mint, just try the settings, it can be awesome 👌)
* The OneNote language is controlled by Microsoft, but the Electron UI is now able to use any language. The default is only implemented now English. If you want to request a new language, there is a `./translation/english/index.js` file, if you create a file like `./translation/chinese/index.js` and implement these keys, I will add a permanent setting in the menu (`Language chooser`).
* You are able to set a proxy in the settings menu.

<!--
* Loads last visibility state
-->

## Corporate

* There is now a menu called ```Corporate home```

# Info about P3X Onenote vs VirtualBox

If you have enough RAM or buffy workstation and you can install Linux VirtualBox inside Windows and use the Marketplace based OneNote or install Office. I think, you do not need  ```p3x-onenote``` at all.  

For my workstation, with a 4.8Ghz CPU, 4 cores, 32 GB-ram, I use VirtualBox on Windows with Office Onenote (I use 6 GB RAM, 4 cores), but unfortunately my Laptop is old and has only 16GB RAM. Given, I develop a lot (NodeJs), I need the RAM, so for my Laptop, I use ```p3x-onenote``` and it's enough. Once the pages are loaded. It is fast, since it's own process without a browser and is in the tray, you don't have to re-load everything again. So it is very usable and after all pages are loaded, quick.

**You can try, you lose nothing.**

# Issues

## Unable to log in

This only happens if you kill ```P3X OneNote Linux``` and then relogin many times. So, If the program needs to be killed often, ```sign out``` (on the top right of the Electron browser frame) just to be safe.

### BUT!

**Exiting using ```quit``` from the ```p3x-onenote``` menu or the tray, will prevent the problem.**

## Latest Gnome with dash-to-panel

For now, I set a `Menu > Settings -> Disable hiding the main window | Enable hiding the main window`, where you can enable or disable hiding, so if the Electron Tray is not working for you, you can set it with this `Setting`.

## Fedora

https://github.com/patrikx3/onenote/issues/3#issuecomment-312711801

## Change language

Although the main page's language can be changed, it reverts back when an actual page is accessed.
This is being investigated.

https://github.com/patrikx3/onenote/issues/14


[//]: #@corifeus-footer

---

[**P3X-ONENOTE**](https://pages.corifeus.com/onenote) Build v1.4.42-532 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  


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