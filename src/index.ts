/**
 * @file
 */
import { MonadLog, Log } from 'macoolka-log-core'
import chalk from 'chalk'
import { fromReader } from 'macoolka-app/lib/MonadFunction'

const print = (message: string) => console.log(message)

export const log: Log['log'] = (message) => print(chalk.cyan(message))
export const warn: Log['warn'] = (message) => print(chalk.yellow(message))
export const error: Log['error'] = (message) => print(chalk.red(message))
export const info: Log['info'] = (message) => print(chalk.bold.magenta(message))
export const debug: Log['debug'] = (message) => print(chalk.gray(message))

/**
 * MonadLog instance for console
 */
const consoleLog: MonadLog = {
    debug: fromReader(debug),
    log: fromReader(log),
    warn: fromReader(warn),
    error: fromReader(error),
    info: fromReader(info)
}
export default consoleLog
