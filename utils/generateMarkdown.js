// -------- Switch statement to get license from prompt and return result to markdown generator --------

let getLicense = function (license) {
  let licenseMd;
  switch (license) {
    case 'MIT License':
      licenseMd = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License 2.0':
      licenseMd = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      licenseMd = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3-Clause License':
      licenseMd = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'ISC License':
      licenseMd = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Creative Commons Attribution 4.0 International (CC BY 4.0)':
      licenseMd = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
      break;
    case 'The Unlicense':
      licenseMd = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    case 'Boost Software License 1.0':
      licenseMd = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Mozilla Public License 2.0':
      licenseMd = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'GNU Lesser General Public License v3.0 (LGPLv3)':
      licenseMd = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    default:
      licenseMd = '';
  }
  return licenseMd;
}

// -------- Generate markdown README.md file --------

function generateMarkdown(data) {
  return `# ${data.title}
  ${getLicense(data.license)}
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
  ${data.usage}
  ## License
  This software uses the ${data.license}.
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions, comments, or bug reports feel free to reach out at [${data.email}](mailto:${data.email}).</br>
  To see more projects or to contribute, please visit [My GitHub Profile](https://github.com/${data.gitHub}).
`;
}

// -------- export generateMarkdown to index.js file --------

module.exports = generateMarkdown;
