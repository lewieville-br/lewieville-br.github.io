document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    username = document.getElementById("username").value;
    alert(`Welcome ${username}! Use promo code "LOGIN" for 15% off.`);
    window.location.href = 'main.html';
});
