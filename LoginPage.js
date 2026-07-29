async function login() {

    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value
        })
    });

    const result = await response.text();

    console.log(result); 

    if (response.ok) {
        window.location.href="home.html";
    } else {
        alert(result);
    }
}