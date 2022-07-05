"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const getTerminal = () => {
    var activeTerminal = vscode.window.activeTerminal;
    if (activeTerminal) {
        return activeTerminal;
    }
    return vscode.window.createTerminal('thg');
};
exports.runCommand = (command) => {
    var activeTerminal = getTerminal();
    if (activeTerminal) {
        activeTerminal.sendText(command);
    }
    else {
        vscode.window.showInformationMessage("Could not get active terminal");
    }
};
//# sourceMappingURL=commandManager.js.map