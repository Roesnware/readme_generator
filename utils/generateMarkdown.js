const licenseBadge = ["https://img.shields.io/badge/License-MIT-yellow.svg", "https://img.shields.io/badge/License-EPL_1.0-red.svg", "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg", "https://img.shields.io/badge/License-ISC-blue.svg"];

const licenseInfo = ["https://opensource.org/licenses/MIT", "https://opensource.org/licenses/EPL-1.0", "https://opensource.org/licenses/MPL-2.0", "https://opensource.org/licenses/ISC"];

let badge = "";
let link = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    // check if license null
    if (!license) {
        return "";
    } else if (license == "MIT") { // returns a license badge based on which license is passed in
        return licenseBadge[0];
    } else if (license == "Eclipse Public License 1.0") {
        return licenseBadge[1];
    } else if (license == "Mozilla Public License 2.0") {
        return licenseBadge[2];
    } else {
        return licenseBadge[3];
    }
}

//TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (!license) {
        return "";
    } else if (license == "MIT") { // returns a license link based on which license is passed in
        return licenseInfo[0];
    } else if (license == "Eclipse Public License 1.0") {
        return licenseInfo[1];
    } else if (license == "Mozilla Public License 2.0") {
        return licenseInfo[2];
    } else {
        return licenseInfo[3];
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    // check if license null
    if (!license) {
        return "";
    } else {
        badge = renderLicenseBadge(license);
        link = renderLicenseLink(license);

        return `[![License: ${license}](${badge})](${link})`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // destruc response obj
    const { 
        title: dataTitle,
        pitch: dataPitch,
        purpose: dataPurpose,
        learn: dataLearn,
        use: dataUse,
        install: dataInstall,
        test: dataTest,
        report: dataReport,
        contribute: dataContribute,
        github: dataGithub,
        email: dataEmail, 
        license: dataLicense
        } = data;

        let lic = renderLicenseSection(dataLicense);

    // return string of data for readme
    return `# ${dataTitle}
## Description
    
    ${dataPitch}
    ${dataPurpose}
    ${dataLearn}

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Test](#test)
- [Report](#report)
- [Questions](#questions)
- [License](#license)
- [Contributing](#contributing)

## Usage
    
    ${dataUse}

## Installation
    
    ${dataInstall}

## Test 

    ${dataTest}

## Report

    ${dataReport}

## Questions

    Contact me for any additional questions: Github- ${dataGithub} Email- ${dataEmail}
    
## License

    ${lic}
    
## Contributing
    
    ${dataContribute}
`;
}

// export module
module.exports = generateMarkdown;