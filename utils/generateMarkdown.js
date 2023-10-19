// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // destruc response obj
    const { title: dataTitle, purpose: dataPurpose, use: dataUse, install: dataInstall, report: dataReport, contribute: dataContribute } = data;

    // return string of data for readme
    return `# ${dataTitle}

`;
}

// export module
module.exports = generateMarkdown;