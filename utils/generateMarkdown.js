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
    return `
  # ${data.Title}

  http://github.com/${data.Username}/${data.Title}
  
 # Description
   ${data.Description}
 
 # Table of Contents
  
 * [Insallation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Test](#test)
 * [Questions](#questions)
 

 # Installation
  Steps to install the project using the dependencies is as follows.${data.Installation}

 # Usage
 Provide Instructiong and examples for use. ${data.Usage}

 # Screenshot
 ${data.Screenshot}
 ![](images\screenshot.PNG)

 # License
 Project is licensed by [![License](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/${data.License})
 [![Github license](https://img.shields.io/badge/license-MIT-green.svg)]

 # Contributing
 Contributors to the project : ${data.Contributing}

 # Test
 Following commands needed to rung the project : ${data.Test}

 # Questions
 Feel free to ask any questions about the project. ${data.Username} or you can email me at : ${data.Email}

 # Github Link www.github.com/${data.Git}
 
`;
}

module.exports = generateMarkdown;