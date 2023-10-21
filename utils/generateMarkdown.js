// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {

    // check if license null
    if (!license) {
        return "";
    } else {

        // returns a license badge based on which license is passed in
        console.log("badge");
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    // check if license null
    if (!license) {
        return "";
    } else {

        // returns the license link
        console.log("link");
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    // check if license null
    if (!license) {
        return "";
    } else {
        let badge = renderLicenseBadge(license);
        let link = renderLicenseLink(license);
        return `${badge} : ${link}`;
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
        report: dataReport,
        contribute: dataContribute,
        github: dataGithub,
        email: dataEmail
        } = data;

    //let lic = renderLicenseSection(license);

    // return string of data for readme
    return `# ${dataTitle}

    ## Description
    
    ${dataPitch}
    ${dataPurpose}
    ${dataLearn}
    
    ## Installation
    
    ${dataInstall}
    
    ## Usage
    
    ${dataUse}

    ## Report bugs

    ${dataReport}

    ## Questions

    Contact me for any additional questions: Github- ${dataGithub} Email- ${dataEmail}
    
    ## License
    
    ## How to Contribute
    
    ${dataContribute}
`;
}

// export module
module.exports = generateMarkdown;