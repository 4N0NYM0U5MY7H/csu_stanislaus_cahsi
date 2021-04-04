# CAHSI website changelog
All notable changes to this site will be documented in this file.

The format is based on [Keep a changelog](https://keepachangelog.com/en/1.0.0), and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unrealeased]
- Add current upcoming events
- Update Resources page with more content
- Update to current CAHSI club team members
- Integrate the `main.css` file after further testing.
- Restore `bootstrap-4.4.1.css` to it's original state.
  -- this should be unaltered as it becomes difficult to track changes within this library. Any changes should be made to `main.css` to overide that of the bootstrap library.
- Investigate the `rounded-image` css class to ensure it is working properly.  Students should not have to edit this effect in Photoshop.
- Load commonly used html elements from separate files to reduce code duplication.
  -- Needs strenous testing to ensure it works across as many platforms as possible.  Current state is ok.
- Incorporate font-awesome for icons, such as the social media in the footer section. 
- Create page templates to easily add new sections to the site. 

## [1.0.8] 03-04-2021
### Changed
- Major semantic html refactoring to the `index.html` file to make the homepage more responsive across mobile and desktop.

## [1.0.7] 02-04-2021
### Changed
- Fixed an issue within the html structure of the `resources.html` file.

## [1.0.6] 31-03-2021
### Changed
- Moved the nav links to the right side of the nav bar for device wider than 992px.
- Navbar responsive logo across the live pages of the site.  Depending on the device view width, you'll now see various versions of the CAHSI logo.
-- Device width xs(<576px) displays only the colorful logo, no text.
-- Device width sm(576px to 767px) displays the colorful logo with CAHSI text.
-- Device width md(768px) and larger displays the full CAHSI logo, including the full name.

## [1.0.5] 30-03-2021
### Changed
- Entire site support for boostrap 4.4.1 and jquery 3.4.1.
- Updated `resources.html` and `blogs.html` relative links to work with new asset locations.
- Fixed minor issues with the navbar not working correctly.
- Updated the copyright section in the footer.

### Added
- Copyright section to `index.html`. Need style changes, but thats for a later.

## [1.0.4] 30-03-2021
### Changed
- Renamed images to fit within reccommended standards, i.e. no spaces or underscores in the names.
- Updated `boostrap-4.4.1.css` and `main.css` relative url paths to point to the correct locatoins.
- Updated `index.html` relative links to point to the correct locations.
- Updated image alt text to be compliant with [w3.org](https://www.w3.org/WAI/tutorials/images/) standards.
- Moved the snapwidget script to load last in the list.  It requires jQuery to work properly and it's old location was easy to miss within the html.

## [1.0.3] 29-03-2021
### Added
- CAHSI logo as favicon to the site.
- `tests` directory for experimental features. This will keep the main website directory clean when adding new features or making other related changes.

### Changed
- Moved the CAHSI logo from the root directory into `assets/images`.
- Included vendor names within `assets/vendor` directory.
- Extracted the student modified code within `bootstrap-4.4.1.css` and placed it into `main.css` file.
  -- import order should be `boostrap-4.4.1.css` and then `main.css` to reflect the neccesarry changes.

## [1.0.2] 28-03-2021
### Removed
- Removed Mac OS resource fork files created when saving to networked, external, or shared drives.
- Removed Mac OS directory settings files.
  -- Mac OS filesytems (HFS) create two types of file information, a resource fork and a data fork.  The data fork contains the data, i.e. the text in a word document, while the resource fork contains the meta-data, i.e. author of the file.
  -- `._`Files are contain the metadata.
  -- `.DS_Store` contains folder specific settings

### Changed
- Added subdirectories for increased organization and maintainability.
- `/assets` includes site files and resources.
- `/assets/vendor` includes site dependancies.

## [1.0.1] 27-03-2021
### Added
- [MIT License](https://choosealicense.com/licenses/mit/) for flexible open source legal option.
- This CHANGELOG file to track changes made to site over time.
- `.gitattributes` and `.gitignore` files for version control consistency accross multilple development environments.