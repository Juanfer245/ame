"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const semver = require("semver");
const dependecy_1 = require("./dependecy");
class DependencyNodeProvider {
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.nonExistingModules = new Array();
        this.unSatisfiedModules = new Array();
        this._dependecies = new Array();
        if (!this.workspaceRoot) {
            return;
        }
        this._packageJsonPath = path.join(this.workspaceRoot, './package.json');
        if (this._packageJsonPath) {
            this._dependecies = this.getPackages(this._packageJsonPath);
        }
    }
    getPackages(packageJsonPath) {
        if (!this.workspaceRoot) {
            vscode.window.showInformationMessage('No dependency in empty workspace');
            return [];
        }
        this.nonExistingModules = new Array();
        this.unSatisfiedModules = new Array();
        if (this.pathExists(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            const toDep = (moduleName, version, isDev) => {
                if (this.workspaceRoot && this.pathExists(path.join(this.workspaceRoot, 'node_modules', moduleName))) {
                    var modulePackageJsonPath = path.join(this.workspaceRoot, 'node_modules', moduleName, 'package.json');
                    let isSatisfied = false;
                    if (this.pathExists(modulePackageJsonPath)) {
                        const modulePackageJson = JSON.parse(fs.readFileSync(modulePackageJsonPath, 'utf-8'));
                        if (modulePackageJson.version) {
                            const moduleVersion = modulePackageJson.version;
                            isSatisfied = semver.satisfies(moduleVersion, version);
                            if (!isSatisfied) {
                                this.nonExistingModules.push(new ModuleInfo(moduleName, version, isDev));
                            }
                        }
                    }
                    return new dependecy_1.Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None, true, isSatisfied, isDev, 'module');
                }
                else {
                    this.unSatisfiedModules.push(new ModuleInfo(moduleName, version, isDev));
                    return new dependecy_1.Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None, false, false, isDev, 'module', {
                        command: 'extension.openPackageOnNpm',
                        title: '',
                        arguments: [moduleName]
                    });
                }
            };
            const deps = packageJson.dependencies
                ? Object.keys(packageJson.dependencies).map(dep => toDep(dep, packageJson.dependencies[dep], false))
                : [];
            const devDeps = packageJson.devDependencies
                ? Object.keys(packageJson.devDependencies).map(dep => toDep(dep, packageJson.devDependencies[dep], true))
                : [];
            if (this.nonExistingModules.length > 0 || this.unSatisfiedModules.length > 0) {
                vscode.window.showErrorMessage('Some modules are missing or not has proper version! You could try \'npm install\'');
            }
            return deps.concat(devDeps);
        }
        return [];
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element) {
            switch (element.label) {
                case 'All':
                    var normalDeps = new dependecy_1.Dependency('Normal', '', vscode.TreeItemCollapsibleState.Expanded, this.nonExistingModules.find(x => !x.isDev) === undefined, this.unSatisfiedModules.find(x => !x.isDev) === undefined, false, 'Sub');
                    var devDeps = new dependecy_1.Dependency('Dev', '', vscode.TreeItemCollapsibleState.Expanded, this.nonExistingModules.find(x => x.isDev) === undefined, this.unSatisfiedModules.find(x => x.isDev) === undefined, false, 'Sub');
                    return Promise.resolve([normalDeps, devDeps]);
                case 'Normal':
                    return Promise.resolve(this._dependecies.filter(x => !x.isDev));
                    break;
                case 'Dev':
                    return Promise.resolve(this._dependecies.filter(x => x.isDev));
                    break;
                default:
                    return undefined;
            }
        }
        else {
            var root = new dependecy_1.Dependency('All', 'Dependecies', vscode.TreeItemCollapsibleState.Expanded, this.nonExistingModules.length < 1, this.unSatisfiedModules.length < 1, false, 'All');
            return Promise.resolve([root]);
        }
    }
    pathExists(p) {
        try {
            fs.accessSync(p);
        }
        catch (err) {
            return false;
        }
        return true;
    }
}
exports.DependencyNodeProvider = DependencyNodeProvider;
class ModuleInfo {
    constructor(name, version, isDev) {
        this._name = name;
        this._version = version;
        this.isDev = isDev;
    }
    getInfo() {
        return `${this._name}-${this._version}`;
    }
}
//# sourceMappingURL=dependecyNodeProvider.js.map