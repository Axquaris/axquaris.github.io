/**
 * Represents the storage key for the theme preference.
 * @type {string}
 */
const storageKey = 'theme-preference';

/**
 * Flips the current theme value when the theme toggle button is clicked.
 * @returns {void}
 */
const onClick = () => {
    // flip current value
    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light';

    setPreference();
};

/**
 * Retrieves the color preference from local storage, defaulting to light.
 * @returns {string} The color preference ('dark' or 'light').
 */
const getColorPreference = () => {
    const stored = localStorage.getItem(storageKey);
    return stored === 'dark' || stored === 'light' ? stored : 'light';
};

/**
 * Sets the preference for the theme and updates the reflected preference.
 * @returns {void}
 */
const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

/**
 * Reflects the current theme by updating the data-theme attribute
 * and aria-label of the theme toggle button.
 * @returns {void}
 */
const reflectPreference = () => {
    document.firstElementChild
        .setAttribute('data-theme', theme.value);

    document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value);
};

/**
 * Represents the theme object.
 * @type {Object}
 * @property {string} value - The current theme value.
 */
const theme = {
    value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

// Function to load external HTML content
function loadPapers() {
    fetch('papers.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('papers_html').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document
        .querySelector('#theme-toggle')
        .addEventListener('click', onClick);

    loadPapers();
};
