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
  # ${data.title}
  ${data.github}

  ##Description
   ${data.description}
 
 ## Table of Contents
  
 1.[Description](#description)
 2.[Languages](#languages)
 3.[Insallation](#Installation)
 4.[Feature](#feature)
 5.[Link](#link)

 ## Languages Used
 ${data.languages}

 ## Installation
  ${data.Installation}
  ${data.link}

  ## Feature
  ${data.feature}
`;
}

module.exports = generateMarkdown;