var length = +prompt("Enter The Length Of Password: "); // Set the desired length of the password

function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Include the characters you want in the password
    let password = "";
    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    document.getElementById('password').textContent = password;
}
