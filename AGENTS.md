[//]: #@corifeus-header

# 📚 P3X OneNote Linux

                        
[//]: #@corifeus-header:end
# AGENTS.md

## Publishing / Building

**IMPORTANT:** Before pushing, publishing, or running any electron-builder command, always ensure that `electron` is listed in `dependencies` (not `devDependencies`) in `package.json`. This is required for the npm package to work correctly when users install it via npm.

The only exception is when running `electron-builder` itself (e.g. `npm run publish-electron-flatpak`), which requires `electron` to be in `devDependencies`. In that case:
1. Temporarily move `electron` from `dependencies` to `devDependencies`
2. Run the electron-builder command
3. **Immediately restore** `electron` back to `dependencies` when done
4. Never commit or push with `electron` in `devDependencies`

### Automated Publishing with `./secure/publish.js`

The publishing process is automated via `./secure/publish.js`. This script handles the full publish workflow including the `electron` dependency swap automatically:

1. The script starts with `electron` in `dependencies` (the normal/correct state)
2. It calls `node ./scripts/fix-packages-publish.js before` to move `electron` from `dependencies` to `devDependencies`
3. It runs `./secure/publish-helper.sh` (the electron-builder build)
4. It calls `node ./scripts/fix-packages-publish.js after` to restore `electron` back to `dependencies`

**Safety mechanism:** The script has built-in cleanup handlers for `SIGINT` (Ctrl+C), `SIGTERM`, and catch blocks. If the script is interrupted or encounters an error while `electron` is in `devDependencies`, it will automatically restore `electron` back to `dependencies` before exiting.

**IMPORTANT for agents:** Before starting any publish workflow, always verify that `electron` is in `dependencies` in `package.json`. If a previous publish run was killed (e.g. `SIGKILL` which cannot be caught), `electron` may still be stuck in `devDependencies`. If so, run `node ./scripts/fix-packages-publish.js after` first to restore the correct state before proceeding.

## Full Publish Workflow for Agents

When the user asks to publish, follow these steps in order:

### 1. Pre-flight check
- Verify `electron` is in `dependencies` (not `devDependencies`) in `package.json`
- If not, run `node ./scripts/fix-packages-publish.js after` to fix it

### 2. Commit and push
- Check `git status` and `git diff` for uncommitted changes
- Commit all changes with a descriptive message
- Push to remote

### 3. Create / update `change-log.md`
- Read the current version from `package.json` (the `version` field) — this is the **current** version
- The publish script (`p3x publish start -a`) will bump the version to the **next** minor patch automatically
- Calculate the next version: increment the patch number by 1 (e.g. `2026.4.106` → `2026.4.107`)
- Read `change-log.md` to see the existing format
- Add a new entry at the top (after the header), using today's date (MM/DD/YYYY) and the **next** version
- Summarize what changed since the last changelog entry based on git log
- Use the format:
  ```
  ### v{next_version}
  Released on {MM/DD/YYYY}
  * FEATURE/BUGFIX/CHORE: Description of change.
  ```
- Commit and push the changelog update

### 4. Run publish
- Execute `./secure/publish.js` — this handles everything: version bump, npm publish, electron-builder, snap release, git push, and GitHub mirror
- Wait for it to complete
- Verify success from the output

### 5. Post-publish check
- Verify `electron` is back in `dependencies` in `package.json`

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


[**P3X-ONENOTE**](https://corifeus.com/onenote) Build v2026.4.107

 [![NPM](https://img.shields.io/npm/v/p3x-onenote.svg)](https://www.npmjs.com/package/p3x-onenote)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end