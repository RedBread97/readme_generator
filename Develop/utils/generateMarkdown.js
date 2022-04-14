// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
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
