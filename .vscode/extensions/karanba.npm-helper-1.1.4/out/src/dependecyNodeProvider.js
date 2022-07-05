"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const dependecy_1 = require("./dependecy");
class DependencyNodeProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        const childs = new Array();
        childs.push(new dependecy_1.Dependency('Test', '1', vscode.TreeItemCollapsibleState.Collapsed));
        return Promise.resolve(childs);
    }
}
exports.DependencyNodeProvider = DependencyNodeProvider;
//# sourceMappingURL=dependecyNodeProvider.js.map