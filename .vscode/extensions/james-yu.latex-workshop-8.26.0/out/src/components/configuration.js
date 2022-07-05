"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const vscode = __importStar(require("vscode"));
class Configuration {
    constructor(extension) {
        this.configurationsToLog = [
            'editor.acceptSuggestionOnEnter',
            'latex-workshop.bind.enter.key',
            'latex-workshop.docker.enabled',
            'latex-workshop.docker.image.latex',
            'latex-workshop.hover.preview.mathjax.extensions',
            'latex-workshop.intellisense.package.enabled',
            'latex-workshop.intellisense.update.aggressive.enabled',
            'latex-workshop.intellisense.update.delay',
            'latex-workshop.latex.autoBuild.run',
            'latex-workshop.latex.build.forceRecipeUsage',
            'latex-workshop.latex.outDir',
            'latex-workshop.latex.recipes',
            'latex-workshop.latex.tools',
            'latex-workshop.viewer.pdf.internal.keyboardEvent'
        ];
        this.extension = extension;
        this.logConfiguration();
        vscode.workspace.onDidChangeConfiguration((ev) => {
            this.logChangeOnConfiguration(ev);
        });
    }
    logConfiguration() {
        const workspaceFolders = vscode.workspace.workspaceFolders || [undefined];
        for (const workspace of workspaceFolders) {
            this.extension.logger.addLogMessage(`Workspace for configuration: ${workspace === null || workspace === void 0 ? void 0 : workspace.uri.toString(true)}`);
            const configuration = vscode.workspace.getConfiguration(undefined, workspace);
            for (const config of this.configurationsToLog) {
                const value = configuration.get(config);
                this.extension.logger.addLogMessage(`${config}: ${JSON.stringify(value, null, ' ')}`);
            }
        }
    }
    logChangeOnConfiguration(ev) {
        const workspaceFolders = vscode.workspace.workspaceFolders || [undefined];
        for (const config of this.configurationsToLog) {
            for (const workspace of workspaceFolders) {
                if (ev.affectsConfiguration(config, workspace)) {
                    const configuration = vscode.workspace.getConfiguration(undefined, workspace);
                    const value = configuration.get(config);
                    this.extension.logger.addLogMessage(`Configutation changed to { ${config}: ${JSON.stringify(value)} } at ${workspace === null || workspace === void 0 ? void 0 : workspace.uri.toString(true)}`);
                }
            }
        }
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map