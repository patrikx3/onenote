[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-onenote.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-onenote/)

  [![Build Status](https://travis-ci.org/patrikx3/onenote.svg?branch=master)](https://travis-ci.org/patrikx3/onenote)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/onenote/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/onenote/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/onenote/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/onenote/?branch=master) 


 
# 📚 P3X Onenote Linux v1.2.344-426  

This is an open-source project. Star this repository if you like it, or even donate!  Thank you so much! :)

I run my own server with dynamic IP address so it may happen that the server can not be reachable for about max 5 minutes due to the dynamic DNS. The server may also be unreachable when I backup the SSD with Clonzilla (very rarely) or an electrical issue (but this should not happen again). When the server is down, please hang on for 5-30 minutes and the server will be back up.

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
sudo mv ~/Downloads/p3x-onenote-a.b.c-d-x86_64.AppImage /opt/p3x-onenote.Appimage
sudo chmod +x /opt/p3x-onenote.AppImage
# Then you can run it
/opt/p3x-onenote.AppImage &
```

The app can also be found on [Atom Apps](https://electron.atom.io/apps/?q=onenote)

If you want to install it on NodeJs instead of the AppImage, it is deprecated, but available [here](https://github.com/patrikx3/onenote/blob/c78e77c540e21b89e0e063cd50a10707faae722e/README.md#cli-install)

<!--
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

# Features

* GNOME menu <!-- (`````~/.local/share/applications/p3x-onenote.desktop`````) -->
* Icon
* Tray
* Restart button (empty your cache, you can login again if there is an error)
* Remember last notebook
* Show / hide
* Quit
* Loads last visibility state

## Corporate

* There is now a menu called ```Corporate home```

# Info about P3X Onenote vs VirtualBox

If you have enough RAM or buffy workstation and you can install VirtualBox inside Windows and use the Marketplace based OneNote or install Office. I think, you do not need  ```p3x-onenote``` at all.  

For my workstation, with a 4.8Ghz CPU, 4 cores, 32 GB-ram, I use VirtualBox on Windows with Office Onenote (I use 6 GB RAM, 4 cores), but unfortunately my Laptop is old and has only 16GB RAM. Given, I develop a lot (NodeJs), I need the RAM, so for my Laptop, I use ```p3x-onenote``` and it's enough. Once the pages are loaded. It is fast, since it's own process without a browser and is in the tray, you don't have to re-load everything again. So it is very usable and after all pages are loaded, quick.

**You can try, you lose nothing.**

# Issues

## Unable to log in

This only happens if you kill ```P3X OneNote Linux``` and then relogin many times. So, If the program needs to be killed often, ```sign out``` (on the top right of the Electron browser frame) just to be safe.

### BUT!

**Exiting using ```quit``` from the ```p3x-onenote``` menu or the tray, will prevent the problem.**

## Latest Gnome with dash-to-panel

The latest ```Gnome``` version with ```dash-to-panel``` removed the ```legacy tray``` icons so that ```Electron``` (and other programs, including ```Skype``` ) do not work with the ```real original tray```. This is not an ```Electron``` or ```p3x-onenote``` issue, but a ```Gnome``` ```dash-to-panel``` problem.   


## Fedora

https://github.com/patrikx3/onenote/issues/3#issuecomment-312711801

## Change language

Although the main page's language can be changed, it reverts back when an actual page is accessed.
This is being investigated.

https://github.com/patrikx3/onenote/issues/14


[//]: #@corifeus-footer

---

[**P3X-ONENOTE**](https://pages.corifeus.com/onenote) Build v1.2.344-426 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## Sponsor

[![JetBrains](https://www.patrikx3.com/images/jetbrains-logo.svg)](https://www.jetbrains.com/)
  
 

[//]: #@corifeus-footer:end