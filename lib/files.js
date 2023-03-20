import fs from 'fs'
import path from 'path'

const getCurrentDirectory = () => {
    return path.basename(process.cwd())
}

const isDirectoryExists = (filePath) => {
    return fs.existsSync(filePath)
}


export {
    isDirectoryExists,
    getCurrentDirectory
}