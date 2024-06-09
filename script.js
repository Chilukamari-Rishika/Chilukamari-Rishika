const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
const shopLink=document.getElementById('shopLink');

if (bar) {
    bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
}

if (close) {
    close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
}

if (shopLink) {
    shopLink.addEventListener('click',(event) => {
            event.preventDefault();
        
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var emailValidationResult = validateEmail(email);

    if (emailValidationResult === 'valid' && name.trim() !== "" && message.trim() !== "") {
        alert('Thank you for your message, ' + name + '!');
        document.getElementById('contactForm').reset();
    } else if (emailValidationResult === '') {
        alert('Enter a valid email.');
    } else {
        alert('Please fill in all fields with valid information.');
    }
});

function validateEmail(email) {
    if (!email.includes('@')) {
        return 'missingAtSymbol';
    }
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? 'valid' : 'invalid';
}


        

document.addEventListener('DOMContentLoaded', () => {
    // Function to update the subtotal for a row
    function updateSubtotal(row) {
        const priceElement = row.querySelector('td:nth-child(4)');
        const quantityElement = row.querySelector('input[type="number"]');
        const subtotalElement = row.querySelector('td:nth-child(6)');

        const price = parseFloat(priceElement.textContent.replace('₹', '').replace(/,/g, ''));
        const quantity = parseInt(quantityElement.value, 10);
        const subtotal = price * quantity;

        subtotalElement.textContent = '$' (total.toLocaleString('en-IN'));

        updateCartTotal();
    }

    // Function to update the cart total
    function updateCartTotal() {
        const rows = document.querySelectorAll('tbody tr');
        let total = 0;

        rows.forEach(row => {
            const subtotalElement = row.querySelector('td:nth-child(6)');
            const subtotal = parseFloat(subtotalElement.textContent.replace('₹', '').replace(/,/g, ''));
            total += subtotal;
        });

        const cartSubtotalElement = document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)');
        const cartTotalElement = document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)');

        cartSubtotalElement.textContent =  '$' (total.toLocaleString('en-IN'));
        cartTotalElement.textContent =  '$' (total.toLocaleString('en-IN'));
    }

    // Function to remove a row
    function removeRow(row) {
        row.remove();
        updateCartTotal();
    }

    // Add event listener to quantity inputs
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('change', (event) => {
            const row = event.target.closest('tr');
            if (event.target.value <= 0) {
                removeRow(row);
            } else {
                updateSubtotal(row);
            }
        });
    });

    // Add event listener to remove buttons
    const removeButtons = document.querySelectorAll('td a i.ri-close-circle-fill');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const row = event.target.closest('tr');
            removeRow(row);
        });
    });

    // Add event listener to the apply coupon button
    const applyCouponButton = document.querySelector('#coupon button');
    applyCouponButton.addEventListener('click', () => {
        const couponInput = document.querySelector('#coupon input');
        const couponCode = couponInput.value.trim();

        if (couponCode !== "") {
            alert('Coupon applied successfully!');
            couponInput.value = '';
        } else {
            alert('Please enter a valid coupon code.');
        }
    });

    // Add event listener to the proceed to checkout button
    const checkoutButton = document.querySelector('#subtotal button');
    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });

    // Initial update of cart total
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        updateSubtotal(row);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.ri-shopping-cart-fill.cart');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productElement = event.target.closest('.pro');
        const productName = productElement.querySelector('h5').innerText;
        const productPrice = productElement.querySelector('h4').innerText;
        
        console.log(Added ,$ ,{productName},to ,the ,cartfor ,$ ,{productPrice} );
        
    }
});


/* login page */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic front-end validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to a different page or handle the successful login
        window.location.href = 'dashboard.html'; // Example redirection
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});



/* chat bot */

function sendMessage() {
    const inputBox = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const message = inputBox.value.trim();

    if (message === "") return;

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    inputBox.value = '';

    
    setTimeout(() => {
       
        const botResponses = [
            "Hello! How can I help you?",
            "I'm here to assist you. What do you need?",
            "Feel free to ask me anything!",
            "What can I do for you today?",
            "Which products details you want?"
        ];

       
        const randomIndex = Math.floor(Math.random() * botResponses.length);

        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = botResponses[randomIndex];
        chatBox.appendChild(botMessage);

        
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}