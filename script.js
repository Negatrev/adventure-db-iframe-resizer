window.addEventListener('message', (event) => {
    console.log('Message received in Silly Tavern:', event);

    // Ensure the message is from your iframe and has the expected type
    if (event.origin === 'https://10.99.1.10:5002' && event.data.type === 'iframe-resize') {
        console.log('Received iframe-resize message:', event.data);

        const iframe = document.getElementById('adventureDbIframe');
        if (iframe) {
            // Add 10 pixels to both height and width
            const newHeight = event.data.height + 10;
            const newWidth = event.data.width + 10;

            console.log('Found iframe:', iframe);
            console.log('Setting iframe height to:', event.data.height + 'px');
            console.log('Setting iframe width to:', event.data.width + 'px'); // New line for width

            iframe.style.height = event.data.height + 'px';
            iframe.style.width = event.data.width + 'px'; // New line for width
        } else {
            console.error('Error: iframe with ID "adventureDbIframe" not found!');
        }
    } else {
        console.log('Message not from expected origin or not an iframe-resize type.');
    }
});
console.log('Silly Tavern iframe resize listener loaded.');

