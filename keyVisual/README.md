# Key Visual - Documentation

## Project Overview

"Key Visual" is an interactive web application that displays keyboard key inputs in real-time on the screen. As users press any key on their keyboard, the application immediately shows the corresponding key symbol or label in large text. This project demonstrates keyboard event handling and DOM manipulation techniques in web development.

---

## How It Works

### Functionality

1. **Keyboard Event Detection**: The application continuously listens for keyboard input using JavaScript event listeners.

2. **Key Display**: When a user presses any key on the keyboard, the application captures the event and displays the key character or its label.

3. **Special Key Handling**: The space key receives special handling and is displayed as "SPC" instead of a blank space for better visibility.

4. **Real-Time Update**: The display updates instantaneously as each key is pressed, providing immediate visual feedback to the user.

---

## File Structure

### HTML (`index.html`)

The HTML file provides the basic structure and semantic layout of the application.

**Key Elements:**

- **`<html lang="en">`**: Declares the document language as English

- **`<head>`**: Contains metadata and external resource links
  - **`<title>`**: Sets the browser tab title to "Document"
  - **`<link rel="stylesheet">`**: Imports the external CSS stylesheet (`style.css`)

- **`<body>`**: Main content container

- **`<div id="main">`**: Primary container that holds the key display
  - Uses flexbox for centering content both horizontally and vertically
  - Covers the full viewport

- **`<h1>`**: Displays the currently pressed key
  - Initially displays "A" as a default placeholder
  - Updated dynamically by JavaScript when keys are pressed

- **`<script src="script.js">`**: Links the external JavaScript file for interactivity

---

### CSS (`style.css`)

The CSS file manages the visual presentation and layout of the application.

**Key Styling Components:**

1. **Universal Selector (`*`)**:
   - Removes default margin and padding from all elements
   - Sets the default font family to 'Gilroy' (a modern, minimalist typeface)
   - Applies `box-sizing: border-box` for consistent sizing calculations

2. **HTML and Body Elements**:
   - Set to 100% width and height to fill the entire viewport
   - No margin or padding to eliminate scrollbars

3. **Main Container (`#main`)**:
   - Uses Flexbox layout for perfect centering
   - `display: flex` enables flexible box layout
   - `align-items: center` centers content vertically
   - `justify-content: center` centers content horizontally
   - Dimensions set to 100% width and height to cover full viewport
   - Background color: Light gray (#e3e3e3) for contrast

4. **Heading Element (`h1`)**:
   - Text color: Dark gray (#1f1f1f) for readability
   - Font size: 10rem (extremely large, approximately 160 pixels)
   - Font weight: 300 (light weight for a modern appearance)
   - `user-select: none` prevents text selection when clicked/dragged
   - Creates a bold, prominent display of the pressed key

---

### JavaScript (`script.js`)

The JavaScript file implements all interactive functionality and keyboard event handling.

**Key Components:**

1. **DOM Reference**:
   - `h1`: Targets the heading element using `document.querySelector("h1")`
   - This element will be updated to display the pressed key

2. **Event Listener**:
   - `window.addEventListener("keydown", function(det){...})`: 
     - Attaches a keyboard event listener to the entire window
     - Triggers on every key press (keydown event)
     - The parameter `det` contains detailed information about the pressed key

3. **Key Detection Logic**:
   - `if(det.key === " ")`: Checks if the pressed key is the space bar
   - If true: Sets the display text to "SPC" (for visibility)
   - If false: Sets the display text to `det.key`, which is the actual key character pressed
   - `det.key` property extracts the keyboard key value from the event object

4. **Text Update**:
   - `h1.textContent = ...`: Updates the heading text content
   - This change is reflected immediately on the screen

---

## Technical Specifications

### Event Handling

- **Event Type**: `keydown` (triggered when a key is pressed)
- **Event Object**: Contains properties like `key` (the character or key identifier)
- **Scope**: Window-level listener (detects all keyboard input regardless of focus)

### Display Characteristics

- **Default Text**: "A" (displayed on page load)
- **Update Speed**: Instantaneous (millisecond response time)
- **Font Display**: Gilroy font family, light weight for modern aesthetics
- **Size**: 10 rem (approximately 160 pixels)
- **Layout**: Centered both horizontally and vertically using Flexbox

### Key Special Cases

| Key Pressed | Display Output |
|-------------|----------------|
| Space      | SPC            |
| Letters    | A-Z (uppercase/lowercase as typed) |
| Numbers    | 0-9            |
| Symbols    | !@#$%^&*()... |
| Enter      | Enter          |
| Backspace  | Backspace      |

---

## Customization Guide

### Changing Display Size

To modify the key text size, adjust the `font-size` property in CSS:

```css
h1 {
    font-size: 10rem;  /* Change this value */
}
```

**Examples**:
- `font-size: 5rem` for medium size
- `font-size: 15rem` for extra large size

### Changing Background Color

To modify the background color, edit the `background-color` property:

```css
#main {
    background-color: #e3e3e3;  /* Change this hex color */
}
```

**Examples**:
- `#ffffff` for white
- `#000000` for black
- `#3498db` for blue

### Changing Text Color

To modify the key text color, edit the `color` property:

```css
h1 {
    color: #1f1f1f;  /* Change this hex color */
}
```

### Custom Key Labels

To add custom labels for specific keys, modify the JavaScript logic:

```javascript
if(det.key === " "){
    h1.textContent = "SPC";
} else if(det.key === "Enter"){
    h1.textContent = "⏎";  // Custom emoji for Enter key
} else {
    h1.textContent = det.key;
}
```

---

## Browser Compatibility

This application uses standard web APIs and is compatible with:
- Chrome/Chromium (all recent versions)
- Firefox (all recent versions)
- Safari (all recent versions)
- Edge (all recent versions)

**Requirements**: 
- Modern browser with support for ES6 JavaScript
- Flexbox CSS support

---

## Use Cases

- **Educational**: Learn about keyboard events and DOM manipulation
- **Demonstrations**: Show keyboard input in presentations or teaching
- **Testing**: Verify keyboard functionality during troubleshooting
- **Accessibility**: Help users understand key presses for accessibility testing
- **Interactive Art**: Use as a foundation for creative keyboard-based projects

---

## Conclusion

Key Visual is a straightforward yet effective demonstration of keyboard event handling in web development. The project showcases fundamental JavaScript concepts including event listeners, DOM selection, and conditional logic, making it an excellent learning resource for beginners. Its minimalist design ensures focus on core functionality while maintaining professional aesthetics.
