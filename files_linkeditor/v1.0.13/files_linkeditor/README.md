# nextcloud--files_linkeditor

A nextcloud app to edit .URL and .webloc files and visit links stored in them.

## Features

* Click on any .URL (Windows) or .webloc (macOS) file in the Nextcloud webinterface to see the link and have the option to visit it directly.
* Create .URL files (no .webloc files as of v1.0.2) from the Nextcloud webinterface.
* Edit the link inside of .URL and .webloc files from the webinterface, if you have write access to the file.
* Change will also be synced to your Desktop, where you can open the shortcut files.

## What are .URL or .webloc files?

If you ever saved a favorite/shortcut in a browser on macOS or Windows, you have thereby created a .webloc or .URL file. Windows saves internet-shortcuts in .URL files and macOS in .webloc files. Example: You drag and drop a shortcut from Firefox to your macOS Desktop -> you have a .webloc file. Now if you sync this file with your Nextcloud, you can view, edit or open the link from within the webinterface.

## Changelog

### 1.0.13, 9. Mar 2020
- Add Basque translation (thanks to @aldatsa).

### 1.0.12, 7. Jan 2020
- Add French translation (thanks to @Gildas-GH).

### 1.0.11, 10. Oct 2019
- Improve appstore description and add screenshots (thanks to @jospoortvliet).
- Add Spanish translation (thanks to @alemorbel).
- Add compatibility for Nextcloud 17.
- Set `scrollTop` property, when creating a new file (see https://github.com/nextcloud/server/pull/12990)

### 1.0.10, 2. Feb 2019
- Apply temporary fix to sidebar issue. See #18.
- Add compatibility for Nextcloud 16.

### 1.0.9, 19. Dec 2018
- Fix issue with public single file shares always displaying `View link` button. Fixes #22.

### 1.0.8, 11. Dec 2018
- Initial changelog entry.
- Add nextcloud 15 compatibility.
- Fix pop-up closing, when visit link is clicked on edit pop-up.
- Allow directly shared link files to be opened. Fixes #19.
