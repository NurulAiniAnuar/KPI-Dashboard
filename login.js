function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => 
        u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect based on role
        if (user.role === "ceo") {
            window.location.href = "pages/ceo.html";
        }
        else if (user.role === "hr") {
            window.location.href = "pages/hr.html";
        }
        else {
            window.location.href = "pages/" + user.role + ".html";
        }

    } else {
        alert("Invalid login!");
    }
}