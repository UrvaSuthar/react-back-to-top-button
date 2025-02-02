# react-go-to-top-customisable-button

[![npm version](https://img.shields.io/npm/v/react-go-to-top-customisable-button.svg?style=flat-square)](https://www.npmjs.com/package/react-go-to-top-customisable-button)
<!-- [![Build Status](https://img.shields.io/travis/yourusername/react-go-to-top-customisable-button.svg?style=flat-square)](https://travis-ci.com/yourusername/react-go-to-top-customisable-button)
[![Coverage Status](https://img.shields.io/codecov/c/github/yourusername/react-go-to-top-customisable-button.svg?style=flat-square)](https://codecov.io/gh/yourusername/react-go-to-top-customisable-button) -->

A highly customizable React component that renders a “Back to Top” button with smooth fade animations, customizable icons, positioning, and accessibility features. Perfect for modern React applications requiring a user-friendly navigation aid.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization & API](#customization--api)
- [Development Workflow](#development-workflow)
  - [File Structure](#file-structure)
  - [Building & Testing](#building--testing)
- [Versioning & Publishing](#versioning--publishing)
- [Contributing](#contributing)
- [License](#license)
- [FAQ](#faq)
- [Changelog](#changelog)
- [Acknowledgments](#acknowledgments)

---

## Overview

The **react-go-to-top-customisable-button** package provides a reusable and accessible “Back to Top” button component for React applications. It automatically appears after the user scrolls past a configurable threshold and offers smooth scroll behavior. Built with a focus on usability, performance (via tree-shaking support), and extensibility, it is designed to integrate seamlessly into any project.

---

## Features

- **Smooth fade-in/out animations:** Controlled via customizable transition duration.
- **Custom icon support:** Use your own icon (SVG, emoji, or React element) instead of the default text.
- **Positioning options:** Easily choose from `top-left`, `top-right`, `bottom-left`, or `bottom-right`.
- **Scroll threshold configuration:** Define how far to scroll before the button appears.
- **Accessibility:** Built-in ARIA attributes and keyboard navigation support.
- **Dark mode support:** Customize colors for different themes.
- **TypeScript support:** Fully typed with auto-generated declaration files.

---

## Installation

Install using npm or yarn:

```bash
npm install react-go-to-top-customisable-button
# or
yarn add react-go-to-top-customisable-button
```

> **Note:** This package has peer dependencies on `react` and `react-dom` (versions 17 or 18).

---

## Usage

After installation, import and use the component in your React app:

```jsx
import React from 'react';
import { BackToTop } from 'react-go-to-top-customisable-button';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  return (
    <div>
      <h1>Scroll Down to See the Button</h1>
      <div style={{ height: '2000px', padding: '10px' }}>
        {/* Your content goes here */}
      </div>
      <BackToTop
        size={60}
        position="bottom-right"
        backgroundColor="#007BFF"
        textColor="#FFFFFF"
        icon={<FaArrowUp />}
        scrollThreshold={300}
        transitionDuration={500}
      />
    </div>
  );
}

export default App;
```

---

## Customization & API

### Props

| Prop Name           | Type                                                       | Default        | Description                                                                                      |
|---------------------|------------------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------|
| **size**            | `number`                                                   | `50`           | Button’s width and height in pixels.                                                           |
| **position**        | `"top-left" \| "top-right" \| "bottom-left" \| "bottom-right"` | `"bottom-right"` | Location of the button on the screen.                                                          |
| **backgroundColor** | `string`                                                   | `"#000"`       | Background color of the button.                                                                |
| **textColor**       | `string`                                                   | `"#fff"`       | Color of the icon/text displayed on the button.                                                |
| **icon**            | `React.ReactNode`                                          | `"⬆️"`         | Icon to be rendered inside the button; can be any valid React element.                           |
| **scrollThreshold** | `number`                                                   | `300`          | Scroll offset (in pixels) after which the button appears.                                      |
| **transitionDuration** | `number`                                               | `300`          | Duration (in ms) of the fade-in/out animation.                                                   |

### Example: Custom Styling

You can further customize the component by overriding inline styles or wrapping it with your own styled container:

```jsx
const customStyles = {
  border: '2px solid #FFF',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

<BackToTop style={customStyles} /* additional props */ />
```

---

## Development Workflow

### File Structure

A recommended folder structure for the project:

```
react-go-to-top-customisable-button/
├── src/
│   ├── BackToTop.tsx       // Main component
│   └── index.ts            // Entry point exporting the component
├── dist/                   // Compiled bundles (CommonJS, ESM, and Type Declarations)
├── tests/                  // Unit and integration tests
├── package.json
├── tsconfig.json           // TypeScript configuration
├── rollup.config.js        // Build configuration using Rollup
└── README.md               // This README file
```

### Building & Testing

- **Build:**  
  Use Rollup to create CommonJS and ES module builds:
  ```bash
  npm run build
  ```
- **Test:**  
  Run your tests using your preferred test runner (e.g., Jest, Mocha):
  ```bash
  npm test
  ```
- **Lint:**  
  Enforce coding standards using ESLint (Airbnb style guide recommended):
  ```bash
  npm run lint
  ```

---

## Versioning & Publishing

This package follows [Semantic Versioning (SemVer)](https://semver.org/). To publish a new version:

1. **Build the package:**
   ```bash
   npm run build
   ```
2. **Commit changes and bump the version:**
   ```bash
   npm version patch   # or 'minor' or 'major' as needed
   git push --tags
   ```
3. **Publish to npm:**
   ```bash
   npm publish
   ```

> **Note:** A CI/CD pipeline (e.g., GitHub Actions) can be set up to automate testing, linting, versioning, and publishing.

---

## Contributing

Contributions are welcome! Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute, report issues, or submit pull requests. When contributing:

- Follow our coding style and linting rules.
- Write tests for any new features or bug fixes.
- Ensure commits follow [Conventional Commits](https://www.conventionalcommits.org/).

---


## FAQ

**Q: Can I customize the button’s animation further?**  
A: Yes, you can override the default styles and transition properties via additional style props.

**Q: What versions of React does this package support?**  
A: It supports React versions 17 and 18 as peer dependencies.

**Q: Is this package tree-shakeable?**  
A: Yes! Written in ES6 module format, unused code can be removed by modern bundlers.

----

## Acknowledgments

- Inspired by countless great open-source projects and community contributions.
- Special thanks to all the contributors who helped make this package better.
- Thanks to [React](https://reactjs.org/) and [Rollup](https://rollupjs.org/) for their excellent tooling.

---

*Created with ♥ by [Urva Suthar](https://github.com/UrvaSuthar)*