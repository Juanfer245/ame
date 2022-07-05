'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const readPkgUp = require("read-pkg-up");
const capitalize = require("lodash.capitalize");
class ScriptsProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode_1.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (!element) {
            const rootPath = vscode_1.workspace.rootPath;
            try {
                const { pkg } = readPkgUp.sync({ cwd: rootPath });
                const scripts = pkg.scripts;
                return Promise.resolve(Object.keys(scripts || {}).map((scriptName) => new Script(capitalize(scriptName), vscode_1.TreeItemCollapsibleState.None, {
                    "title": "<unused>",
                    "command": "extension.runCommand",
                    "arguments": scripts ? [`npm run ${scriptName}`] : [""]
                })));
            }
            catch (err) {
                console.log("yo error occurred", err);
            }
        }
        return Promise.resolve([]);
    }
}
class Script extends vscode_1.TreeItem {
    constructor(label, collapsibleState, commandToRun) {
        super(label, collapsibleState);
        this.label = label;
        this.collapsibleState = collapsibleState;
        this.command = commandToRun;
        this.iconPath = {
            light: 'resources/icon.svg',
            dark: 'resources/icon.svg'
        };
        this.contextValue = 'script';
    }
}
function runInTerminal(command) {
    try {
        const terminal = vscode_1.window.createTerminal("run_script");
        terminal.show();
        terminal.sendText(command);
    }
    catch (err) {
        vscode_1.window.showErrorMessage(`Failed to run ${command}`);
    }
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "npm-ui" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode_1.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode_1.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(vscode_1.window.registerTreeDataProvider('package-scripts', new ScriptsProvider()));
    context.subscriptions.push(vscode_1.commands.registerCommand('extension.runCommand', (command) => {
        runInTerminal(command);
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map