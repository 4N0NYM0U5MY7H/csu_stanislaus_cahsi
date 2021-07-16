# CAHSI website changelog
All notable changes to this site will be documented in this file.

Please note that the version numbering is not for the benefit of the end user, but rather for internal documentation and accountability for further maintainers.

## [Unrealeased]
- Add sort, search, & filter to `events.html`
- Events and Resources pages will be split into separate pages.
  - `upcoming-events.html` & `past-events.html` pages to be published via AJAX.
  - `resources.html ` & `internships.html` & `scholarships.html` & `research.html` pages...More planning required.
- Update Resources page with more content
- Update to current CAHSI club team members 
- Create page templates to easily add new sections to the site. 

---
## 21.07.15 — 15.07.2021
---
## Changed
- update homepage style
  - team member section
  - instagram section
  - goals section
- overhaul `blog` page
- minor navbar changes
- minor style changes on `events` page
- removed placeholder images

---
## 21.07.14 — 14.07.2021
---
### Changed
- `resources` page complete style overhaul.
- update home page contact form style.

---
## 21.07.13 — 13.07.2021
---
### Changed
- Update site navbar.
  - made "sticky"
  - style changes for large screens.
  - logo size for medium screens.
- Removed support for `evo-calendar` in the `main.js` file.
- Replaced homepage embedded form with a custom responsive form.

### Added
- HTML 5 & CSS 3 support on Internet Explorer 8 and older.

### Fixed
- Typo on main page navbar. 

---
## 21.07.12 — 12-07-2021
---
### Changed
- Consolidated `vendor` javascript and css files into `js` and `css` directories respectively.
- Added fontawesome icon support.
- Update site footer.
  - Now uses icons in place of images
- Update footer contact link.
  - Added subject line and body content for e-mail.

---
## 21.05.03 — Live Site Update 03-05-2021
---
### Changed
- Main page header to promote upcoming Students in Tech event.

### Fixed
- Registration link for the event!

---
## 21.05.02 — Live Site Update 02-05-2021
---
### Changed
- Semantic structure across multiple pages.
- Final update to the `students-in-tech` page.
- Minor style changes.

### Fixed
- Navbar logo not correctly pointing to home page.

---
## 21.04.27 — Live Site Update 27-04-2021
---
### Changed
- Updated `students-in-tech.html` in preparation for this year's event.
- General style update across the site.

---
## 21.04.26 — Live Site Update 26-04-2021
---
### Changed
- Updated homepage banner for upcoming Warriors in Tech event.
- Updated CSS to reduce inline style calls across the site.
- Removed extra bootstrap and popper js files.
- Removed images that have been replaced.
- Removed evo-calendar files.

---
## 21.04.25a — 25-04-2021
---
### Fixed
- Navbar issue on `blog.html`.

---
## 21.04.25 — 25-04-2021
---
### Changed
- Renamed `blogs.html` to the singular. Reflected the changes across all site links.
- Renamed temporary blog pages to the post title in preparation for publishing the live blog section of the site.
- Minor internal structure changes to increase site performance, with a focus on mobile.
- Minor sitewide pages changes to improve SEO and accessibility.
- Switched strictly to `bootstrap.bundle.min.js` in favor of loading poper and boostrap seperately.

### Added
- Template for blog posts.
- Favicon support for web, mobile, desktop--including ipad, ios, macos, android, windows 8 & 10.

---
## 21.04.21 — Live Site Update 18-04-2021
---
### Changed
- Navbar style change from dark to light.
- Homepage banner to include an upcoming event.

---
## 21.04.18 — Live Site Update 18-04-2021
---
### Fixed
- Corrected asset links on all internal pages that are currently under development.
- Formatted and performed bug fiexes on all internal pages that are currently under development. 

---
## 21.04.15 — Live Site Update 15-04-2021
---
### Fixed
- Issue causing the mobile navigation menu to not display properly.

---
## 21.04.13 — Live Site Update 13-04-2021
---
### Changed
- Restored `bootstrap-4.4.1.css` to its original state. All modified css was added to `main.css`.
- Minified vedor css and js files to increase performance.
- Current events on the main page.

### Added
- `events.html` to host an events page on the site. Pushed changes to the live site so visitors can gain the most benefit from this change.

---
## 21.04.12 — 12-04-2021
---
### Changed
- Renamed the `assets` directory to `vendor`.
- Moved `style`, `image`, and `script` to root to increase performance on mobile devices.

### Fixed 
- Relative links across the site's pages.

## Live Site Update 11-04-2021
- Pushed the changes to be live on the server.

---
## 21.04.05a — 05-04-2021
---
### Changed
- Semantic html refactoring to the `blogs.html` file.

### Fixed
- Minor issues across all pages.

---
## 21.04.05 — 05-04-2021
---
### Changed
- Major semantic html refactoring to the `resources.html` file to make the page more responsive across mobile and desktop.
- Removed `vendor` subdirectory to reduce chaining and increase site performance. Vendor related files are still stored in their respective subdirectories within the `assets` directory.

### Fixed 
- Issue in `main.css` addressing the wrong class. Should be adding to `.jumbotron` and not `.nav-brand`. 

---
## 21.04.03 — 03-04-2021
---
### Changed
- Major semantic html refactoring to the `index.html` file to make the homepage more responsive across mobile and desktop.

---
## 21.04.02 — 02-04-2021
---
### Fixed
- Issue within the html structure of the `resources.html` file causing performance bottlenecks.

---
## 21.03.31 — 31-03-2021
---
### Changed
- Moved the nav links to the right side of the nav bar for device wider than 992px.
- Navbar responsive logo across the live pages of the site.  Depending on the device view width, you'll now see various versions of the CAHSI logo.
  - Device width xs(<576px) displays only the colorful logo, no text.
  - Device width sm(576px to 767px) displays the colorful logo with CAHSI text.
  - Device width md(768px) and larger displays the full CAHSI logo, including the full name.

---
## 21.03.30 — 30-03-2021
---
### Changed
- Entire site support for boostrap 4.4.1 and jquery 3.4.1.
- Updated `resources.html` and `blogs.html` relative links to work with new asset locations.
- Updated the copyright section in the footer.

### Fixed
- Minor issues with the navbar not working correctly.

### Added
- Copyright section to `index.html`. Need style changes, but thats for a later.

---
## 21.03.30 — 30-03-2021
---
### Changed
- Renamed images to fit within reccommended standards, i.e. no spaces or underscores in the names.
- Updated `boostrap-4.4.1.css` and `main.css` relative url paths to point to the correct locatoins.
- Updated `index.html` relative links to point to the correct locations.
- Updated image alt text to be compliant with [w3.org](https://www.w3.org/WAI/tutorials/images/) standards.
- Moved the snapwidget script to load last in the list.  It requires jQuery to work properly and it's old location was easy to miss within the html.

---
## 21.03.29 — 29-03-2021
---
### Added
- CAHSI logo as favicon to the site.
- `tests` directory for experimental features. This will keep the main website directory clean when adding new features or making other related changes.

### Changed
- Moved the CAHSI logo from the root directory into `assets/images`.
- Included vendor names within `assets/vendor` directory.
- Extracted the student modified code within `bootstrap-4.4.1.css` and placed it into `main.css` file.
  - import order should be `boostrap-4.4.1.css` and then `main.css` to reflect the neccesarry changes.

---
## 21.03.28 — 28-03-2021
---
### Removed
- Removed Mac OS resource fork files created when saving to networked, external, or shared drives.
- Removed Mac OS directory settings files.
  - Mac OS filesytems (HFS) create two types of file information, a resource fork and a data fork.  The data fork contains the data, i.e. the text in a word document, while the resource fork contains the meta-data, i.e. author of the file.
  - `._`Files are contain the metadata.
  - `.DS_Store` contains folder specific settings

### Changed
- Added subdirectories for increased organization and maintainability.
- `/assets` includes site files and resources.
- `/assets/vendor` includes site dependancies.

---
## 21.03.27 — 27-03-2021
---
### Added
- [MIT License](https://choosealicense.com/licenses/mit/) for flexible open source legal option.
- This CHANGELOG file to track changes made to site over time.
- `.gitattributes` and `.gitignore` files for version control consistency accross multilple development environments.