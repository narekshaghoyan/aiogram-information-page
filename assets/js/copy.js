function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(function() {
        button.innerText = 'Copied!';
        setTimeout(function() {
            button.innerText = 'Copy';
        }, 1000); 
    }, function(err) {
        console.error('Failed to copy text to clipboard: ', err);
    });
}