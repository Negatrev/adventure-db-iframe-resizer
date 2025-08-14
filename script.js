window.addEventListener('message', (event) => {
    console.log('Message received in Silly Tavern:', event);

    // Ensure the message is from your iframe and has the expected type
    // The event.origin should now be 'https://10.99.1.10:5002'
    if (event.origin === 'https://10.99.1.10:5002' && event.data.type === 'iframe-resize') {
        console.log('Received iframe-resize message:', event.data);

        const iframe = document.getElementById('adventureDbIframe');
        if (iframe) {
            console.log('Found iframe:', iframe);
            console.log('Setting iframe height to:', event.data.height + 'px');
            iframe.style.height = event.data.height + 'px';
        } else {
            console.error('Error: iframe with ID "adventureDbIframe" not found!');
        }
    } else {
        console.log('Message not from expected origin or not an iframe-resize type.');
    }
});
console.log('Silly Tavern iframe resize listener loaded.');