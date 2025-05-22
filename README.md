# Open in Git Tower - VS Code Extension

A Visual Studio Code extension that allows you to quickly open folders in Git Tower directly from VS Code's explorer.

## Features

- Right-click any folder in VS Code's explorer to open it in Git Tower
- Works with workspace folders and sub-folders
- Simple and lightweight integration between VS Code and Git Tower

## Requirements

- Visual Studio Code 1.60.0 or higher
- Git Tower must be installed on your machine
- The `gittower` CLI command must be available in your PATH

## Installation

1. Install the extension through VS Code's Extensions view
2. Ensure Git Tower is installed on your system
3. Make sure the `gittower` CLI command is properly set up

## Usage

1. In VS Code's explorer, right-click on any folder
2. Select "Open in Git Tower" from the context menu
3. The selected folder will open in Git Tower

You can also:
- Use the Command Palette (Cmd/Ctrl + Shift + P) and type "Open in Git Tower"
- Right-click on the root workspace folder to open it in Git Tower

## Known Issues

- None currently reported

## Release Notes

### 1.0.1
- Added better folder detection
- Improved context menu visibility
- Added support for workspace root folders

### 1.0.0
- Initial release
- Basic folder opening functionality

## Contributing

The source code for this extension is available on [GitHub](https://github.com/twfahey1/vscode-extension-open-in-gittower). Feel free to contribute by submitting issues or pull requests.

## License

This extension is licensed under the [MIT License](LICENSE).
