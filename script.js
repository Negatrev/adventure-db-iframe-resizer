window.addEventListener('message', (event) => {
    console.log('Message received in Silly Tavern:', event);

    // Ensure the message is from your iframe and has the expected type
    if (event.origin === 'https://10.99.1.10:5002' && event.data.type === 'iframe-resize') {
        console.log('Received iframe-resize message:', event.data);

        const iframe = document.getElementById('adventureDbIframe');
        if (iframe) {
            // Set iframe dimensions directly to reported values (they now include padding)
            const newHeight = event.data.height; // Removed + 10
            const newWidth = event.data.width;   // Removed + 10

            console.log('Setting iframe height to:', newHeight + 'px');
            console.log('Setting iframe width to:', newWidth + 'px');

            iframe.style.height = newHeight + 'px';
            iframe.style.width = newWidth + 'px';
        } else {
            console.error('Error: iframe with ID "adventureDbIframe" not found!');
        }
    } else {
        console.log('Message not from expected origin or not an iframe-resize type.');
    }
});
console.log('Silly Tavern iframe resize listener loaded.');
