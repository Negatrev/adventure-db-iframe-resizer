# Adventure DB Iframe Resizer - SillyTavern Extension

This SillyTavern extension provides dynamic iframe resizing functionality for Adventure DB integration.

## Installation

Copy this entire `ST-Extension` folder to your SillyTavern extensions directory, or integrate it into your Adventure DB repository.

## Functionality

- Listens for iframe resize messages from Adventure DB (origin: `https://10.99.1.10:5002`)
- Automatically adjusts the iframe dimensions with small offsets for optimal display
- Targets iframe with ID `adventureDbIframe`

## Files

- `manifest.json` - Extension metadata and configuration
- `script.js` - Main extension logic for iframe resizing
- `README.md` - This documentation file