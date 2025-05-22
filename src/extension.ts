import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.openInGitTower', (uri: vscode.Uri) => {
        const folderPath = uri.fsPath;
        exec(`gittower "${folderPath}"`, (err, stdout, stderr) => {
            if (err) {
                vscode.window.showErrorMessage(`Failed to open Git Tower: ${stderr}`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
