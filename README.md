[//]: #@corifeus-header

  [![Build Status](https://travis-ci.org/patrikx3/onenote.svg?branch=master)](https://travis-ci.org/patrikx3/onenote)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/onenote/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/onenote/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/onenote/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/onenote/?branch=master) 

  
[![NPM](https://nodei.co/npm/p3x-onenote.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-onenote/)
---

 
# P3X Onenote Linux v1.2.49-264  

This is an open source project. Just code.

### Node Version Requirement 
``` 
>=8.9.0 
```  
   
### Built on Node 
``` 
v9.0.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    

# Description  

                        
[//]: #@corifeus-header:end

This is a Linux Onenote.

# You cannot log in

I think it only happens, if you kill the OneNote Linux and you then login again a lot. So to be safe, always ```sign out```, it is on the top right!!!

# Some info about P3X Onenote vs VirtualBox
If you have enough RAM or buffy workstation and you can install VirtualBox inside Windows and use the Marketplace based OneNote or install Office. I think, you do not need  ```p3x-onenote``` at all.  

For my workstation, with a 4.8Ghz CPU, 4 cores, 32 GB-ram, I use VirtualBox on Windows with Office Onenote (I use 6 GB RAM, 4 cores), but unfortunately my Laptop is old and has only 16GB RAM. Given, I develop a lot (NodeJs), I need the RAM, so for my Laptop, I use ```p3x-onenote``` and it's enough. Once the pages are loaded. It is fast, since it's own process without a browser and is in the tray, you don't have to re-load everything again. So it is very usable and after all pages are loaded, quick.

**You can try, you loose nothing.**

# Downloadable installer
https://github.com/patrikx3/onenote/releases

# You can find it in Atom Apps as well

https://electron.atom.io/apps/?q=onenote


# CLI Install

```bash
# this is some weird NPM error, you need like this:
node -v
# make sure it is above 7.8!!!
sudo npm install -g p3x-onenote --unsafe-perm=true --allow-root
p3x-onenote
```

After last startup and you logout and login again, you will have a menu.
  
Fedora: https://github.com/patrikx3/onenote/issues/3#issuecomment-312711801
  

# Features
* GNOME menu (`````~/.local/share/applications/p3x-onenote.desktop`````)
* Icon
* Tray
* Restart button (empty your cache, you can login again if there is an error)
* Remember last notebook
* Show / hide
* Quit
* Loads last visibility state

# Corporate

* Now, there is a menu ```Corporate home```

# Screenshot

![Screenshot 1](https://cdn.corifeus.com/git/onenote/artifacts/screenshot/1.png)



[//]: #@corifeus-footer

---

[**P3X-ONENOTE**](https://pages.corifeus.com/onenote) Build v1.2.49-264 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LFRV89WPRMMVE&lc=HU&item_name=Patrik%20Laszlo&item_number=patrikx3&currency_code=HUF&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted) 


 

[//]: #@corifeus-footer:end