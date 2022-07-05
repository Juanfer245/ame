'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const dependecyNodeProvider_1 = require("./dependecyNodeProvider");
const commandManager = require("./commandManager");
const checkRestore = () => {
    //var packageJson = require('./package.json');
    //console.log(packageJson),
};
function activate(context) {
    const dependencyNodeProvider = new dependecyNodeProvider_1.DependencyNodeProvider(vscode.workspace.rootPath);
    let dependencyNodeProviderDisposal = vscode.window.registerTreeDataProvider('dependencies', dependencyNodeProvider);
    context.subscriptions.push(dependencyNodeProviderDisposal);
    let refreshEntryDisposal = vscode.commands.registerCommand('dependencies.refreshEntry', () => {
        dependencyNodeProvider.refresh();
    });
    context.subscriptions.push(refreshEntryDisposal);
    let goToHomeDisposal = vscode.commands.registerCommand('dependencies.goToHome', (item) => {
        commandManager.runCommand(`npm home ${item.label}`);
    });
    let checkRestoreDisposable = vscode.commands.registerCommand('dependencies.checkRestore', (uri) => {
        checkRestore();
    });
    context.subscriptions.push(checkRestoreDisposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map