import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'

// lib
import {isDirectoryExists, getCurrentDirectory} from './lib/files.js'
import {createManifest} from './lib/manifest.js'
import {askQuestions} from './lib/inquirer.js'

clear()

console.log(
    chalk.yellow(
        figlet.textSync("Create Extension", {horizontalLayout: 'full'})
    )
)

if(isDirectoryExists('./manifest.json')){
    console.log(chalk.red('Already a extension Directory'))
    process.exit()
}

createManifest()