// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "No License") {
    return "";
  } else if (license == "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license == "Apache") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license == "BSD") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (license == "GPL") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "No License") {
    return "";
  } else if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license == "GPL") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, license) {
  let licenseBadge = renderLicenseBadge(answers.license);
  console.log(answers);
  return `# ${answers.projectTitle}

  ${licenseBadge}

  ## Table of Contents
* Description
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

 ## Description
${answers.description}

 ## Installation
${answers.installation}

 ## Usage
${answers.usage}

 ## License
 

 ## Contributing
${answers.contributions}

 ## Tests
 ${answers.tests}

 ## Questions
 
 

`;
}

module.exports = generateMarkdown;