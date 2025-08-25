import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('gitExtensions.fileHistory', (uri: vscode.Uri) => {
    if (!uri) {
      vscode.window.showErrorMessage("No file selected.");
      return;
    }

    const filePath = uri.fsPath;
    exec(`gitex.cmd filehistory "${filePath}"`, (err) => {
      if (err) {
        vscode.window.showErrorMessage(`Failed to launch Git Extensions: ${err.message}`);
      }
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
