[//]: #@corifeus-header

# 📚 P3X OneNote Linux

                        
[//]: #@corifeus-header:end

## Change log

### v2026.4.115
Released on 03/31/2026
* BUGFIX: Dark mode invert now only applies to the webview, keeping the bottom bar in original colors.

### v2026.4.114
Released on 03/29/2026
* BUGFIX: Reverted iframe back to webview to fix blank page after OAuth login.
* CHORE: Added WebContentsView migration plan to AGENTS.md.

### v2026.4.113
Released on 03/29/2026
* REFACTOR: Reverted from iframe to webview tag for OneNote embedding due to Microsoft MSAL OAuth incompatibility.
* FEATURE: GitHub releases now include changelog content, version title, changelog link, and Snapcraft badge.
* FEATURE: Publish script auto-populates GitHub release body from change-log.md.

### v2026.4.112
Released on 03/29/2026
* BUGFIX: Restored electron to dependencies after failed publish.
* BUGFIX: Improved GitHub draft release promotion with fallback search.
* CHORE: Removed armv7l (32-bit ARM) build targets.
* CHORE: Removed electron from devDependencies cleanup.

### v2026.4.110
Released on 03/29/2026
* FEATURE: Added 18 new languages and improved language detection.
* BUGFIX: Reload webview after suspend/resume to restore sync (#204).
* REFACTOR: Replaced webview with iframe for OneNote rendering.
* REFACTOR: Replaced AngularJS with vanilla JS and converted renderer to ESM.
* REFACTOR: Migrated Electron main process files from CJS to ESM.
* DOCS: Reorganized and improved README structure and readability.
* CHORE: Updated GitHub Actions to use latest versions of checkout, setup-node, and action-gh-release.

### v2026.4.109
Released on 03/29/2026
* REFACTOR: Replaced deprecated `<webview>` with `<iframe>` and WebviewProxy for Electron best practices.
* FEATURE: Publish script now auto-generates changelog via Claude AI and promotes GitHub draft releases to published.
* CHORE: Strip X-Frame-Options and CSP frame-ancestors in main process for iframe compatibility.
* CHORE: Removed `webviewTag` and `nodeIntegrationInSubFrames` from webPreferences.

### v2026.4.107
Released on 03/29/2026
* BUGFIX: Fix sync loss after suspend/resume by reloading the webview once network is restored (https://github.com/patrikx3/onenote/issues/204).
* FEATURE: Toast now supports sticky mode (stays until clicked or replaced by a new toast).
* FEATURE: Added safe publish workflow with automatic electron dependency restore on interruption.

### v2026.4.105
Released on 03/28/2026
* FEATURE: Refactored the Electron main process to ESM (.mjs) with import/export syntax.
* FEATURE: Replaced AngularJS and Angular Material with vanilla JS — native `<dialog>` for prompts, custom CSS toast, zero framework dependencies.
* FEATURE: Renderer files converted to ESM (.mjs) using a CJS shim pattern for Electron API access.
* FEATURE: OneNote-branded purple (#7719AA) bottom toolbar with system font stack (Segoe UI / Noto Sans / Liberation Sans).
* FEATURE: Removed 6 dependencies: angular, angular-animate, angular-aria, angular-material, angular-messages, @fontsource/roboto.

### v2026.4.104
Released on 03/25/2026
* FEATURE: Upgrade Microsoft languge method to work accross all solutions set by P3X-Onenote.

### v2026.4.103
Released on 03/15/2026
* FEATURE: Upgrade build.yml

### v2026.4.102
Released on 03/07/2026
* BUGFIX: https://github.com/patrikx3/onenote/issues/239

## Older change logs     
[Change log 2025](change-log.2025.md)  
[Change log 2024](change-log.2024.md)  
[Change log 2023](change-log.2023.md)  
[Change log 2022](change-log.2022.md)  
[Change log 2021](change-log.2021.md)  
[Change log 2020](change-log.2020.md)  
[Change log 2019](change-log.2019.md)  


[//]: #@corifeus-footer

---

## 🚀 Quick and Affordable Web Development Services

If you want to quickly and affordably develop your next digital project, visit [corifeus.eu](https://corifeus.eu) for expert solutions tailored to your needs.

---

## 🌐 Powerful Online Networking Tool  

Discover the powerful and free online networking tool at [network.corifeus.com](https://network.corifeus.com).  

**🆓 Free**  
Designed for professionals and enthusiasts, this tool provides essential features for network analysis, troubleshooting, and management.  
Additionally, it offers tools for:  
- 📡 Monitoring TCP, HTTP, and Ping to ensure optimal network performance and reliability.  
- 📊 Status page management to track uptime, performance, and incidents in real time with customizable dashboards.  

All these features are completely free to use.  

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

---


[**P3X-ONENOTE**](https://corifeus.com/onenote) Build v2026.4.115

 [![NPM](https://img.shields.io/npm/v/p3x-onenote.svg)](https://www.npmjs.com/package/p3x-onenote)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
