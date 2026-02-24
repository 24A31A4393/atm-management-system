let correctPin = "1234";
let balance = 1000;

function login() {
    let pin = document.getElementById("pinInput").value;

    if(pin === correctPin) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("atmSection").style.display = "block";
    } else {
        document.getElementById("loginMsg").innerText = "Incorrect PIN!";
    }
}

function deposit() {
    let amount = parseInt(document.getElementById("amount").value);
    if(amount > 0) {
        balance += amount;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "Amount Deposited!";
    }
}

function withdraw() {
    let amount = parseInt(document.getElementById("amount").value);
    if(amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "Amount Withdrawn!";
    } else {
        document.getElementById("message").innerText = "Insufficient Balance!";
    }
}

function logout() {
    document.getElementById("atmSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
}
