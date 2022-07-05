"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
class Dependency extends vscode.TreeItem {
    constructor(label, version, collapsibleState, isExist, isSatisfied, isDev, contextValue, command) {
        super(label, collapsibleState);
        this.label = label;
        this.version = version;
        this.collapsibleState = collapsibleState;
        this.isExist = isExist;
        this.isSatisfied = isSatisfied;
        this.isDev = isDev;
        this.contextValue = contextValue;
        this.command = command;
        this._folderName = '';
        this.iconPath = {
            light: path.join(__filename, '..', '..', 'resources/svg/', this.isExist && this.isSatisfied ? 'folder-ok.svg' :
                !this.isExist ? 'folder-mising.svg' : 'folder-empty.svg'),
            dark: path.join(__filename, '..', '..', 'resources/svg/', this.isExist && this.isSatisfied ? 'folder-ok.svg' :
                !this.isExist ? 'folder-mising.svg' : 'folder-empty.svg')
        };
        this.contextValue = contextValue;
    }
    get tooltip() {
        if (this.isSatisfied && this.isExist) {
            return `${this.label}-${this.version}`;
        }
        else if (!this.isExist) {
            return `${this.label}-${this.version} - missing module!`;
        }
        else {
            return `${this.label}-${this.version} - module version not satisfied!`;
        }
    }
    get description() {
        return this.version;
    }
}
exports.Dependency = Dependency;
//# sourceMappingURL=dependecy.js.map