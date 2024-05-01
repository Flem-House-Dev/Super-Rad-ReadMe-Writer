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
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents

  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Constributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ## Installaion
  ${data.installation}
  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions
  [My GitHub Profile](https://github.com/${data.})
  https://github.com/JFleming963
`;
}

module.exports = generateMarkdown;
