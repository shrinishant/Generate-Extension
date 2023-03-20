import inquirer from "inquirer"
import {getCurrentDirectory} from './files.js'

const askQuestions = () => {
    const cwd = getCurrentDirectory()
    console.log(cwd)
    
    const questions = [
        {
            name: "extension_name",
            type: 'input',
            message: 'Enter Your Extension Name: (' + cwd + ')',
            default: cwd,
            // validate: function(value) {
            //     if(value.length) {
            //         return true
            //     }else{
            //         return "Please enter extension name"
            //     }
            // }
        },
        {
            name: "description",
            type: 'input',
            message: 'Enter Description: '
        },
        {
            name: "version",
            type: 'input',
            message: 'Version: '
        },
        {
            name: "manifest_version",
            type: 'input',
            message: 'Manifest Version: '
        },
        {
            name: "permissions",
            type: 'input',
            message: 'Permissions: '
        },
    ]
    return inquirer.prompt(questions)
}

export {
    askQuestions
}