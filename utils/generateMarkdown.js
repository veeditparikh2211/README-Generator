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
  
  #Description
   ${data.Description}
 
 # Table of Contents
  
 1.[Insallation](#installation)
 2.[Usage](#usage)
 3.[License](#license)
 4.[Contributing](#contributing)
 5.[Test](#test)
 6.[Questions](#questions)
 

 # Installation
  Steps to install the project using the dependencies is as follows.${data.Installation}

 # Usage
 Provide Instructiong and examples for use. ${data.Usage}

 # License
 Project is licensed by ${data.License}
 ![Github license](https://img.shields.io/badge/license-MIT-green.svg)

 # Contributing
 Contributors to the project : ${data.Contributing}

 # Test
 Following commands needed to rung the project : ${data.Test}

 # Qiestions
 Feel free to ask any questions about the project. ${data.Username}/${data.Email}

 
`;
}

module.exports = generateMarkdown;