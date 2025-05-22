import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.openInGitTower', (uri?: vscode.Uri) => {
        // If URI is not provided (command palette), use workspace folder
        const folderPath = uri?.fsPath || vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
        
        if (!folderPath) {
            vscode.window.showErrorMessage('No folder selected and no workspace folder found');
            return;
        }

        exec(`gittower "${folderPath}"`, (err, stdout, stderr) => {
            if (err) {
                vscode.window.showErrorMessage(`Failed to open Git Tower: ${stderr}`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
