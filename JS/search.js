// Grab DOM elements and store them in variables
const searchBar = document.getElementById('searchBar');
const items = document.querySelectorAll('.searchable-item');

// Listen for input events as the user types
searchBar.addEventListener('input', (event) => {
  // Capture user input and normalize to lowercase
  const query = event.target.value.toLowerCase();

  // Loop through each element in the list
  items.forEach(item => {
    // Get the text inside the item and normalize it
    const text = item.textContent.toLowerCase();

    // Check if the item's text includes the search query
    if (text.includes(query)) {
      item.classList.remove('is-hidden'); // Show item
    } else {
      item.classList.add('is-hidden');    // Hide item
    }
  });
});
