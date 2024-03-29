// Function that returns a license badge based on which license is passed in

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

// Function that renders license in table of contents

function renderLicenseTOC(license) {
  if (license == "No License") {
    return "";
  } else {
    return "* [License](#license)";
  }
}

// Function that renders license section header.

function renderLicenseSectionHeader(license) {
  if (license == "No License") {
    return "";
  } else {
    return "## License";
  }
}

// Function that returns the license link

function renderLicenseLink(license) {
if (license == "No License") {
  return "";
} else if (license == "MIT") {
  return "https://opensource.org/licenses/MIT";
} else if (license == "Apache") {
  return "https://opensource.org/licenses/Apache-2.0";
} else if (license == "BSD") {
  return "https://opensource.org/licenses/BSD-3-Clause";
} else if (license == "GPL") {
  return "https://www.gnu.org/licenses/gpl-3.0";
}
}

// Function that returns the license section of README

function renderLicenseSection(license) {
  if (license == "No License") {
    return "";
  } else if (license == "MIT") {
    return "This project is covered by the MIT License. Additional information about the license can be found at the link below.";
  } else if (license == "Apache") {
    return "This project is covered by the Apache License. Additional information about the license can be found at the link below.";
  } else if (license == "BSD") {
    return "This project is covered by the BSD License. Additional information about the license can be found at the link below.";
  } else if (license == "GPL") {
    return "This project is covered by the GPL License. Additional information about the license can be found at the link below.";
  }
}

// Function to generate markdown for README

function generateMarkdown(answers, license) {
  let licenseBadge = renderLicenseBadge(answers.license);
  let licenseLink = renderLicenseLink(answers.license);
  let licenseSection = renderLicenseSection(answers.license);
  let licenseTOC = renderLicenseTOC(answers.license);
  let licenseHeader = renderLicenseSectionHeader(answers.license);
 
  return `# ${answers.projectTitle}

  ${licenseBadge}

  ## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${licenseTOC}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

 ## Description
${answers.description}

 ## Installation
${answers.installation}

 ## Usage
${answers.usage}

 ${licenseHeader}
 ${licenseSection}
 ${licenseLink}

 ## Contributing
${answers.contributions}

 ## Tests
 ${answers.tests}

 ## Questions
 
 https://github.com/${answers.username}

 Please reach out to me with any additional questions you may have using my email address provided below:

 ${answers.email}
 

`;
}

module.exports = generateMarkdown;