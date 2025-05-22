# Developer Guide - VS Code Git Tower Extension

## Development Environment

### Requirements
- Node.js 18 or higher
- VS Code 1.60.0 or higher
- Git Tower installed locally
- VSCE (VS Code Extension Manager) - Install with `npm install -g vsce`

### Initial Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to compile TypeScript

## Development Workflow

### Building the Extension
1. Make your code changes
2. Run `vsce package` from the project root
3. This will generate a .vsix file in the root directory

### Testing the Extension
1. Open VS Code
2. Press `Cmd/Ctrl + Shift + P` to open the Command Palette
3. Type "Install from VSIX"
4. Select the generated .vsix file
5. Reload VS Code when prompted

### Debugging Tips
- Use `console.log()` statements in extension.ts (they'll appear in the Debug Console)
- Run the extension in debug mode by pressing F5 in VS Code
- Check Output panel (View -> Output) and select "Git Tower Extension" for logs

### Common Commands
```bash
# Compile TypeScript
npm run compile

# Watch for changes during development
npm run watch

# Package the extension
vsce package

# Bump version (if needed)
npm version patch/minor/major
```

### Project Structure
```
.
├── src/                # TypeScript source files
├── out/               # Compiled JavaScript
├── .vscodeignore      # Files to exclude from package
├── package.json       # Extension manifest
└── tsconfig.json      # TypeScript configuration
```

## Publishing Updates

1. Update version in package.json
2. Run `vsce package` to create new .vsix
3. Test the packaged extension
4. Publish using `vsce publish` (requires marketplace credentials)

## Troubleshooting

- If `vsce package` fails, check:
  - All required fields in package.json
  - Valid LICENSE file exists
  - All dependencies are properly listed
- If extension doesn't appear in context menu:
  - Check package.json contributes section
  - Verify extension is properly activated
  - Look for errors in Output panel
