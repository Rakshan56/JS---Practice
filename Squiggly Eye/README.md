# Squiggly Eye

Squiggly Eye is an interactive face animation built with HTML, CSS, and vanilla JavaScript. The eyes follow the mouse pointer, the eyebrows react to the pointer direction, and the mouth changes to match the current mood.

## Features

- Pupils track the mouse across the viewport.
- Automatic mode selects a mood from the pointer position.
- Manual mode cycles through six moods:
	- Neutral
	- Smile
	- Frown
	- Surprised
	- Confused
	- Angry
- Eyes blink automatically at random intervals.
- Blinking can be turned on or off.
- Moving the pointer outside the window resets the face.
- CSS classes and inline transforms animate the facial expressions.

## JavaScript Techniques Used

### DOM element selection

The script uses `querySelector`, `querySelectorAll`, and `getElementById` to connect JavaScript behavior to the controls and facial elements in `Index.html`.

### Mouse event handling

`mousemove` is used to continuously read `clientX` and `clientY`. A `mouseleave` listener restores the default face position when the pointer leaves the window.

### Normalized coordinates and clamping

The pointer position is converted into a range from `-1` to `1`, relative to the center of the viewport. The `clamp` helper prevents the calculated values from moving outside that range.

```js
const x = clamp(((e.clientX - centerX) / centerX) * ratio, -1, 1);
const y = clamp(((e.clientY - centerY) / centerY) * ratio, -1, 1);
```

These normalized values make the animation work consistently across different viewport sizes.

### Conditional mood mapping

`getMood` uses threshold checks to translate pointer direction into a mood. For example, moving right produces a smile, while moving down produces a frown.

### Dynamic DOM updates

The script changes CSS classes, text content, inline transforms, and the CSS `translate` property at runtime:

- `className` changes the mouth shape.
- `textContent` updates the control labels.
- `style.transform` positions and rotates the eyebrows.
- `style.translate` moves the pupils.

### Arrays and cyclic state changes

The `moodList` array stores the available moods. The manual mood button finds the current mood and advances to the next one using modulo arithmetic, so the list loops back to the beginning.

### Event listeners and state management

The application keeps simple state variables for blinking, the selected mood, and the current mode. Button event listeners update that state and refresh the interface.

### Timers and random intervals

`setTimeout` removes the blink class after the short blink animation. `setInterval` triggers blinking repeatedly, while `Math.random()` gives each blink cycle a slightly different interval.

## Controls

- **Mode**: Switch between Manual and Auto mood behavior.
- **Mood**: Enable Manual mode and cycle through the available moods.
- **Blink**: Toggle automatic blinking.

## Run Locally

No build tools or dependencies are required.

1. Open `Index.html` in a modern web browser.
2. Move the mouse around the page to control the face.
3. Use the controls in the top-right corner to change the mode, mood, or blinking behavior.

## Project Files

- `Index.html` - Page structure and control buttons.
- `style.css` - Face styling, expressions, transitions, and blink animation.
- `script.js` - Mouse tracking, mood logic, state changes, and timers.
