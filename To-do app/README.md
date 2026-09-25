# To-Do App

A simple browser-based to-do list built with HTML, CSS, and vanilla JavaScript. The JavaScript focuses on dynamically creating tasks, handling task interactions, and preserving the list with `localStorage`.

## Features

- Add a new task from the text input.
- Prevent empty tasks from being added.
- Mark a task as completed by clicking its text.
- Delete a task by clicking the `x` control.
- Restore saved tasks automatically when the page is opened again.

## JavaScript Overview

The application logic is in [`script.js`](script.js).

### DOM references

The script starts by selecting the two elements it needs:

- `#input-box` contains the task entered by the user.
- `#list-container` contains the dynamically generated `<li>` elements.

### Adding tasks

`addTask()` checks whether the input is empty. For a valid value, it:

1. Creates a new `<li>` element.
2. Adds the task text to the list item.
3. Creates a `<span>` containing the delete symbol (`x`).
4. Appends the task and delete control to the list.
5. Clears the input and saves the updated list.

The function is called by the **Add** button in [`index.html`](index.html).

### Handling task actions

One click listener is attached to `#list-container` using event delegation:

- Clicking an `LI` toggles the `checked` class, which displays the task as completed.
- Clicking a `SPAN` removes its parent task from the list.

After either action, the current list is saved.

### Persisting data

`saveData()` stores `listContainer.innerHTML` under the `data` key in `localStorage`.

`showTask()` reads the saved HTML when the script loads and places it back inside the list container. This allows tasks to remain available after refreshing or reopening the page in the same browser.

## Project Structure

```text
To-do app/
├── index.html   # Page structure and input controls
├── script.js    # Task creation, interaction, and persistence
├── style.css    # Layout and task states
├── README.md    # Project documentation
└── images/      # Icons used by the interface
```

## How to Run

1. Open [`index.html`](index.html) directly in a web browser, or use the Live Server extension in VS Code.
2. Enter a task in the input field.
3. Select **Add**.
4. Click a task to mark it complete, or click `x` to delete it.

No build tools or external JavaScript dependencies are required.

## JavaScript Concepts Practiced

- `document.getElementById()` for DOM selection
- Functions and arrow functions
- Conditional logic and input validation
- `document.createElement()` and DOM manipulation
- `addEventListener()` and event delegation
- CSS class toggling with `classList.toggle()`
- Browser storage with `localStorage`
