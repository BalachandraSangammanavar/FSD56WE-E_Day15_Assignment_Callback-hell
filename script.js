// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Function to display a message after a delay
const displayMessage = (message, delay, callback) => {
    setTimeout(() => {
        countdownElement.textContent = message;
        callback();
    }, delay);
};

// Callback hell
displayMessage('10', 1000, () => {
    displayMessage('9', 1000, () => {
        displayMessage('8', 1000, () => {
            displayMessage('7', 1000, () => {
                displayMessage('6', 1000, () => {
                    displayMessage('5', 1000, () => {
                        displayMessage('4', 1000, () => {
                            displayMessage('3', 1000, () => {
                                displayMessage('2', 1000, () => {
                                    displayMessage('1', 1000, () => {
                                        displayMessage('Happy Independence Day!', 1000, () => {
                                            // All messages displayed
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
