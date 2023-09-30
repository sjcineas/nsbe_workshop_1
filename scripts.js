document.addEventListener('DOMContentLoaded', function () {
    var signUpButton = document.getElementById('signup-button');
    var descriptionHeading = document.querySelector('.description h3');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    signUpButton.addEventListener('click', function () {
        const name = usernameInput.value;
        descriptionHeading.textContent = `Thank you for signing up ${name}!!!`;
        alert(`
            Thank you for signing up!
            Username: ${name}
            Password: ${passwordInput.value}
        `);
    });
});
