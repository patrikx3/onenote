[//]: #@corifeus-header

# 📚 P3X OneNote Linux

                        
[//]: #@corifeus-header:end

## Change log

### v2020.4.154
* FEATURE: Added ARM version.

### v2020.4.131
* CHORE: Update NPM packages.

### v2020.4.119
* BUG: The set proxy menu was not working.

### v2020.4.115
* FEATURE: Added Spanish translation.

### v2020.4.109
* CHORE: Upgrade to Electron v8.

### v2020.4.100
* FEAT: Ability to hide the main menu (in tray mode only).

### v2019.10.318
* FEAT: Portuguese locale in the GUI enhance.

### v2019.10.317
* FEAT: Portuguese locale in the GUI.

### v2019.10.301
* Bugfix: configstore error

### v2019.10.211
* CHORE: Upgraded Electron v4 to v6 finally and using just 1 icon 🙌

### v2019.10.202
* Bugfix: Build error.

### v2019.10.230
* Bugfix: Electron v6 was generating twice icons so I reverted to v4.2.8

### v2019.10.127
* CHORE: Upgraded Electron v4 to v6.

### v2019.10.117
* BUGFIX: DISABLE_WAYLAND fix
  * https://github.com/patrikx3/onenote/issues/70
  * https://github.com/patrikx3/onenote/pull/71

### v2019.4.122
* BUGFIX: configstore v5 is not working with SNAP, had to revert to configstore v4
  * https://github.com/patrikx3/onenote/issues/68

### v2019.4.115
* BUGFIX: The cursor sometimes hidden
  * https://github.com/patrikx3/onenote/issues/67

### v2019.4.114
* BUGFIX: Since the `Language` menu shift from the `Check updates` `Help` to `View`.

### v2019.4.108
* CHORE: Revert to Electron v4, as showing 2 icons with the hack.

### v2019.4.104
* CHORE: Upgraded to Electron v5
* BUGFIX: Electron was not working sandbox, I worked it out with a script in `src/build/after-pack.js`

### v2019.4.101
* BUGFIX: Minor translation issue.

### v2019.4.42
* BUGFIX: Revert Electron to v4.2.1 as there is an SUID permission, https://github.com/patrikx3/onenote/issues/63

### v2019.4.39
* FEATURE: New `OneNote 2019` icon
* FEATURE: German translation, able to try to guess `Online Onenote` language, but not always working ...

### v2019.4.33
FEATURE: Added in the `Action` menu to go to any URL.

### v2019.4.32
FEATURE: The link chooser was missing the cancel button.

### v2019.4.31
CHORE: Updated all dependencies.

### v2019.4.26
FEATURE: the Electron GUI color (you can check in the `Set Proxy` theme) is switched form blue to purple

### v2019.4.24
FEATURE: Allows using multiple instances (with some quirks, as the config will not be synchronized, so it can provide wrong settings)

### v2019.4.21
FEATURE: Reverted added emoji in the title (notebook)

### v2019.4.19
FEATURE: Added emoji in the title (notebook)

### v2019.4.17
FEATURE: The settings tray menu is a checkbox now (it was a button and different labels).

### v2019.4.12
BUGFIX: the tray was giving a "tray was already destroyed" error

### v2019.4.8
FEATURE: for all links in P3X OneNote is left for the user to decide how the links are handled - as internal or external

### v2019.4.7
* BUGFIX: the tray was showing all the time, now, it only shown if the close button behavior is happening by minimize to the tray

### v2019.02.17
* BUGFIX: Added info, that not every case can be handled.
* BUGFIX: On the sidebar on notebooks it was opening a new window, it is quite hacky, but is supposed to be working.

### v2019.02.16
* BUGFIX: On the sidebar on notebooks it was opening a new window, it is quite hacky, but is supposed to be working.

### v2019.02.04
* BUGFIX: Donation button was Hungarian, now is supposed to be automatically by browser locale.

### v2019.02.02
* FEATURE: Disable/enable main timer on window blur/focus
* CHORE: upgrade to Electron 4.0.4 


### v2019.01.24
* CHORE: upgrade to Electron 4.0.2 

### v2019.01.18
* BUGFIX: it was saving the window position and size, but it is not correct, because the user could change 2 monitors to 1 monitor and could save incorrect positions, so I disabled this option


[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-ONENOTE**](https://pages.corifeus.com/onenote) Build v2020.4.154

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
