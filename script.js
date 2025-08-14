window.addEventListener('message', (event) => {
    console.log('Message received in Silly Tavern:', event);

    if (event.origin === 'https://10.99.1.10:5002' && event.data.type === 'iframe-resize') {
        console.log('Received iframe-resize message:', event.data);

        const iframe = document.getElementById('adventureDbIframe');
        if (iframe) {
            // Add fixed offsets to compensate for minor discrepancies
            const newHeight = event.data.height + 2; // Add 2px for height
            const newWidth = event.data.width + 10; // Add 10px for width

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
