# Image Moodboard - Vanilla JS React-like Implementation

A demonstration project showing how to implement React-like functionality using pure JavaScript. This project recreates core React concepts like component creation and DOM manipulation without any frameworks or dependencies, allowing users to reorder images in a moodboard layout.

![Image Moodboard](https://github.com/EkaterinaGorbunova/image-moodboard/blob/main/public/moodboard.png)

## Key Features
- Custom implementation of `React.createElement()` function
- DOM element creation and manipulation without frameworks
- Interactive image cards with reordering functionality
- Responsive design with modern CSS

## Technical Implementation
- **Custom React-like Engine:**
  - Pure JavaScript implementation of element creation
  - Event delegation for dynamic content
  - Data attributes for element tracking
- **Modern JavaScript Features:**
  - ES6+ syntax
  - DOM manipulation
  - Event handling
- **Build Tools:**
  - Vite.js for modern development experience

## Code Example
```javascript
const React = {
  createElement(htmlTag, props, children) {
    const element = document.createElement(htmlTag);
    element.className = props.className || '';
    // ... props handling
    return element;
  }
};
```

## Get Started

1. Clone the repository
```bash
git clone
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

## Project Structure
```
├── src/
│   ├── main.js      # Main implementation and element creation
│   └── style.css    # Styles
├── index.html       # Entry point
└── package.json     # Project configuration
```

## Educational Value
This project demonstrates:
- Basic principles of element creation in JavaScript
- DOM manipulation techniques
- Event handling and delegation
- Modern JavaScript patterns and practices


