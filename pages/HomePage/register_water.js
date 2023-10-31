const numb = document.querySelector(".number");
let counter = 0;
let targetAmount = 0;

function updateCounter() {
    if (counter <= targetAmount) {
        numb.textContent = counter + "ml";
        counter += 1;

        const percentage = (counter / targetAmount) * 100;

        if (percentage <= 50) {
            document.querySelector(".circle .left .progress").style.transform = `rotate(${percentage * 1.8}deg)`;
        } else {
            document.querySelector(".circle .left .progress").style.transform = "rotate(90deg)";
            document.querySelector(".circle .right .progress").style.transform = `rotate(${(percentage - 50) * 1.8}deg)`;
        }
    } else {
        clearInterval(counterInterval);
    }
}

let counterInterval = null;

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
        targetAmount = parseInt(amount);
        counter = 0;
        counterInterval = setInterval(updateCounter, 70);
        alert("Registro de água bem-sucedido!");
    })
    .catch((error) => {
        console.error("Erro ao registrar água:", error);
        alert("Erro ao registrar água");
    });
});
