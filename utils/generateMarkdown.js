// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [GitHub](#github)

  

<a name='Description'></a>
## Description

${data.description}\n
---
<a name='Installation'></a>
## Installation

${data.installInstructions}\n
---
<a name='Usage'></a>
## Usage
${data.usage}\n
---
<a name='Contributinge'></a>
## Contributing
${data.contributing}\n
---
<a name='Test'></a>
## Test
${data.test}\n
---
<a name='Questions'></a>
## Questions
Please contact me with any questions via the email address below or on GitHub.
${data.questions}\n

<${data.email}>\n

[${data.githubUsername}](https://github.com/${data.githubUsername})\n
---          
${renderLicenseBadge(data.license)} 
`;
}

module.exports = generateMarkdown;
