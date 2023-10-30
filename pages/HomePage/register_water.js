document.getElementById("register-button").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const inputDate = document.getElementById("date").value;
    const id = document.getElementById("id").value;

    const requestData = {
        name,
        quantidade_ml: amount,
        data: inputDate, 
        register_id: id,
    };

    fetch("https://api-agua.onrender.com/registros/register_water", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erro ao registrar");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Registro de água bem-sucedido:", data);
        alert("Registro de água bem-sucedido!");
    })
    .catch((error) => {
        console.error("Erro ao registrar água:", error);
        alert("Erro ao registrar água");
    });
});
