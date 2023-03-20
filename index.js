import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'


clear()

console.log(
    chalk.yellow(
        figlet.textSync("Create Extension", {horizontalLayout: 'full'})
    )
)