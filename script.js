var input = document.getElementById('inputText');
var button = document.getElementById('copyButton');
var alertElement = document.getElementById('alert');

button.addEventListener('click', function() {
  var text = input.value.trim();
  
  // Replace "đ" with "d"
  text = text.replace(/đ/g, 'd');

  // Normalize the text to remove diacritical marks (accents)
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Remove multiple whitespace with a single space
  text = text.replace(/\s+/g, ' ');

  // Convert to lowercase and replace spaces with hyphens
  text = text.toLowerCase().replace(/ /g, '-');

  // Copy the modified text to the clipboard
  navigator.clipboard.writeText(text);

  // Display the alert message and close after 3 seconds
  alertElement.textContent = 'Text copied to clipboard: ' + text;
  alertElement.style.display = 'block';
  setTimeout(function() {
    alertElement.style.display = 'none';
  }, 3000);
});