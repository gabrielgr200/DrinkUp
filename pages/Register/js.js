const registrationForm = document.getElementById("registration-form");
        const successMessage = document.getElementById("success-message");

        registrationForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const password = document.getElementById("password").value;

            const data = {
                name,
                password
            };

            fetch("https://api-agua.onrender.com/registros/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao registrar");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Registro bem-sucedido:", data);

                successMessage.style.display = "block";

                setTimeout(() => {
    
                    window.location.href = "http://127.0.0.1:5500/pages/HomePage/index.html"; 
                }, 2000); 
            })
            .catch((error) => {
                console.error("Erro ao registrar:", error);
            });
        });