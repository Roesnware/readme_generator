// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

    // check if license null
    if(!license) {
        return "";
    } else {
        // returns a license badge based on which license is passed in

    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 

    // check if license null
    if(!license) {
        return "";
    } else {

        // returns the license link
        
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    // check if license null
    if(!license) {
        return "";
    } else {

        // returns the license section of README
        renderLicenseLink(license);
        renderLicenseBadge(license);
    }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // destruc response obj
    const { title: dataTitle, purpose: dataPurpose, use: dataUse, install: dataInstall, report: dataReport, contribute: dataContribute, pitch: dataPitch, learn: dataLearn} = data;

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
    
    ## License
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ## How to Contribute
    
    ${dataContribute}
`;
}

// export module
module.exports = generateMarkdown;