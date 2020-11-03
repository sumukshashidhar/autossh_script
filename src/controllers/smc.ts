import { resolveAny } from "dns";

export {};
const logger = require("./../config/logger")
async function runCommand(command:string) {
    return new Promise(async function (resolve, reject) {
        resolve(command)
    })
}
module.exports = {
    runCommand: runCommand
}