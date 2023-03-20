import chalk from 'chalk'
import fs from 'fs'
import _ from 'lodash'
import {askQuestions} from './inquirer.js'

const formatManifest = (answers) => {
    console.log(answers)
    return `
{
    "name": "${answers.extension_name}",
    "description": "${answers.description}",
    "version": "${answers.version}",
    "manifest_version": "${answers.manifest_version}",
    "permissions": "${answers.permissions}"
}
    `
}

const run = async () => {
    const answers = await askQuestions()
    const fmtManifest = formatManifest(answers)
    return fmtManifest
}

const createManifest = async() => {

    const ans = await run()
    const filelist = _.without(fs.readdirSync('.'),'.git', '.gitignore');

    console.log(filelist)
    if(filelist.length){
        fs.writeFileSync('manifest.json', ans, (error) => {
            if(error){
                console.log("Couldn't create file")
            }else{
                console.log("successfully generated manifest.json")
            }
        })
    }else{
        console.log(
            chalk.red('Already something in manifest.js')
        )
    }
}

export {
    createManifest
}