function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (username === "" || password === "") {
        error.innerHTML = "Please fill all fields";
        error.style.color = "red";
    }
    else if (username === "admin" && password === "1234") {
        window.location.href = "index.html";
    }
    else {
        error.innerHTML = "Invalid username or password";
        error.style.color = "red";
    }
}
<script>
if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
}
</script>
