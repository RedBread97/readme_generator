// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT') {
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
  let licenseType = license.license; // i think this is problem #1
  let licenseLinks = ''
  if(licenseType === 'MIT') {
    licenseLinks = `[License: MIT](https://img.shields.io/badge/License-MIT-greens.svg)`
  } else if (licenseType === 'GPLv3') {
    licenseLinks = `[Apache2.0 license](https://img.shields.io/badge/License-Apache2.0-green.svg)`
  } else if (licenseType === 'GPL') {
    licenseLinks = `[GNU Public License](https://img.shields.io/badge/License-GNUPublicv3.0-green.svg)`
  } else {
    license.license = "N/A"
  }
  return licenseLinks;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
----
<a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Contact Information](#contact-information)
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
### Contact-Information
[Github Profile](https://github.com/${data.username})
${data.email}
`;
}




module.exports = generateMarkdown;
