document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Welcome! Use promo code "LOGIN" for 15% off.');
    window.location.href = 'main.html';
});
