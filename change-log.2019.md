[//]: #@corifeus-header

# 📚 P3X OneNote Linux

                        
[//]: #@corifeus-header:end
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

# 🌐 Meet Assistant SaaS — meeting.corifeus.com

Don't want to install anything? Try the **hosted version** at **[meeting.corifeus.com](https://meeting.corifeus.com)** — full meeting workflow built for European businesses, no setup, no API key, no command line.

What the hosted version offers:

- **21-language live translation** during the meeting
- **AI summaries, action items, decisions, attendees, key quotes** auto-generated after every meeting
- **Custom vocabulary** — your client / company / industry terms corrected automatically (Pro+ tier)
- **Searchable meeting library** — find any decision or promise across all your past meetings
- **Shareable read-only links** — send a clean meeting summary to a client or teammate, no signup needed on their end
- **One-click email summary** after each meeting
- **Premium engine on every plan** — no downgraded model, ever
- **EU billing** — Stripe Tax + VAT-compliant + EUR-priced (Solo €19.99 / Pro €39.99 / Business €99.99 per month, no lock-in)
- **GDPR-compliant by default** — browser-language auto-detection, no tracking cookies, your meetings stored encrypted

Try the live demo (1 minute free, no signup) or browse the **public sample meeting** at [meeting.corifeus.com/sample](https://meeting.corifeus.com/sample).

---

# Corifeus Network

AI-powered network & email toolkit — free, no signup.

**Web** · [network.corifeus.com](https://network.corifeus.com)  **MCP** · [`npm i -g p3x-network-mcp`](https://www.npmjs.com/package/p3x-network-mcp)

- **AI Network Assistant** — ask in plain language, get a full domain health report
- **Network Audit** — DNS, SSL, security headers, DNSBL, BGP, IPv6, geolocation in one call
- **Diagnostics** — DNS lookup & global propagation, WHOIS, reverse DNS, HTTP check, my-IP
- **Mail Tester** — live SPF/DKIM/DMARC + spam score + AI fix suggestions, results emailed (localized)
- **Monitoring** — TCP / HTTP / Ping with alerts and public status pages
- **MCP server** — 17 tools exposed to Claude Code, Codex, Cursor, any MCP client
- **Install** — `claude mcp add p3x-network -- npx p3x-network-mcp`
- **Try** — *"audit example.com"*, *"why do my emails land in spam? test me@example.com"*
- **Source** — [patrikx3/network](https://github.com/patrikx3/network) · [patrikx3/network-mcp](https://github.com/patrikx3/network-mcp)
- **Contact** — [patrikx3.com](https://www.patrikx3.com/en/front/contact) · [donate](https://paypal.me/patrikx3)

---

## ❤️ Support Our Open-Source Project  
If you appreciate our work, consider ⭐ starring this repository or 💰 making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.eu](https://corifeus.eu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.


[**P3X-ONENOTE**](https://corifeus.com/onenote) Build v2026.4.138

 [![NPM](https://img.shields.io/npm/v/p3x-onenote.svg)](https://www.npmjs.com/package/p3x-onenote)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
