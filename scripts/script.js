function copyToClipboard(event) {
  const button = event.currentTarget;
  const promptElement = button.parentNode.querySelector('.copyPrompt');

  if (promptElement) {
    let promptText = promptElement.textContent.trim();
    if (promptText) {
      navigator.clipboard.writeText(promptText).then(
        function () {
          console.log('Copying to clipboard was successful!');
        },
        function (err) {
          console.error('Could not copy text: ', err);
        }
      );
    } else {
      console.error('Prompt does not contain any text to copy.');
    }
  } else {
    console.error('Prompt element not found.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const copyButtons = document.querySelectorAll('details > button');

  copyButtons.forEach((copyButton) => {
    copyButton.addEventListener('click', copyToClipboard);
  });
});