# Project Branch History

This document lists the development branches in chronological order of creation and their purpose, to assist with resuming work on a new machine.

## 1. Design Exploration
Initial phases exploring different aesthetic directions.
- **`linear-style`**: Minimalist, linear design concept.
- **`retro-pixelated`**: Retro, 8-bit inspired portfolio interface.
- **`creative-avant-garde`**: Experimental, artistic layout.

## 2. Core Implementation
The selected direction: A full VS Code-style IDE in the browser.
- **`ide-layout`**: The main implementation of the IDE interface.
- **`side-panel-drawer`**: Implementation of the file explorer and side panels.

## 3. Features & Refinements
Enhancements to the core IDE experience.
- **`keyboard-shortcuts`**: Added Command Palette (Ctrl+Shift+P) and file navigation shortcuts.
- **`responsive-design`**: Mobile and tablet adaptations, including the bottom navigation bar.
- **`polish`** (Current): 
  - Complete Theming System (Theme Provider, 20+ Themes).
  - GitHub Dark default.
  - Font Settings (JetBrains Mono/Fira Code + Size Scaling).
  - UI refinement (Popups, borders, scrollbars).

## Recommended Setup on New Machine
1. Clone the repository.
2. `npm install`
3. Checkout **`polish`** to resume work on the latest version.
   ```bash
   git checkout polish
   ```
4. `npm run dev`
