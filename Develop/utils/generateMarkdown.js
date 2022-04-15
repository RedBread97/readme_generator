// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license; 
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-greens.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![Apache2.0 license](https://img.shields.io/badge/License-Apache2.0-green.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GNU Public License](https://img.shields.io/badge/License-GNUPublicv3.0-green.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinks; 
  if (license === 'MIT') {
    licenseLinks = `[License: MIT](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'GPLv3') {
    licenseLinks = `[Apache2.0 license](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'GPL') {
    licenseLinks = `[GNU Public License](https://choosealicense.com/licenses/gpl-3.0/)`
  } else {
    license.license = "N/A"
  }
  return licenseLinks;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license === 'MIT') {
    return `MIT license
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'Apache2.0') {
    return `Apache2.0 license
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'GNU Public v3.0') {
    return `GNU Public v3.0 license
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. `
  } else{
    return 'N/A';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
----
<a href="https://img.shields.io/badge/License-${data.license}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license}-brightgreen"></a>
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Contact Information](#contact-information)
- [License](#license)
### Description
${data.description}
### Installation
${data.installation}
### Usage
${data.usage}
### Contribution
${data.contribution}
### Test-Instructions
${data.tests}
### License
${renderLicenseSection(data.license)}
[Click for more info] (${renderLicenseLink(data.license)})
### Contact-Information
[Github Profile](https://github.com/${data.username})
${data.email}
`;
}




module.exports = generateMarkdown;
