<!DOCTYPE html>
<html>
<head>
<title>ATM Machine</title>
<style>
body{font-family:Arial;text-align:center;margin-top:50px;}
input,button{margin:5px;padding:5px;}
#atm{display:none;}
</style>
</head>
<body>

<div id="login">
  <h2>ATM Machine</h2>
  <p>Enter PIN:</p>
  <input id="pinInput" type="password" placeholder="4-digit PIN">
  <br>
  <button onclick="login()">Login</button>
  <p id="loginMsg" style="color:red"></p>
</div>

<div id="atm">
  <h2>ATM Machine</h2>
  <p>Balance: ₹<span id="bal">1000</span></p>
  <input id="amt" type="number" placeholder="Enter amount">
  <br>
  <button onclick="deposit()">Deposit</button>
  <button onclick="withdraw()">Withdraw</button>
  <p id="message"></p>
  <button onclick="logout()" style="background:#dc3545;color:white;">Logout</button>
</div>

<script>
let balance=1000;
const correctPIN="1234"; // set your PIN here

function login(){
  const pin=document.getElementById("pinInput").value;
  if(pin===correctPIN){
    document.getElementById("login").style.display="none";
    document.getElementById("atm").style.display="block";
    document.getElementById("loginMsg").innerText="";
  } else {
    document.getElementById("loginMsg").innerText="Incorrect PIN!";
  }
}

function deposit(){
  const amt=parseFloat(document.getElementById("amt").value);
  if(amt>0){ balance+=amt; updateMsg(`Deposited ₹${amt}`); }
  else updateMsg("Enter valid amount", true);
}

function withdraw(){
  const amt=parseFloat(document.getElementById("amt").value);
  if(amt>0 && amt<=balance){ balance-=amt; updateMsg(`Withdrawn ₹${amt}`); }
  else updateMsg("Insufficient or invalid amount", true);
}

function updateMsg(msg,error=false){
  document.getElementById("message").innerText=msg;
  document.getElementById("message").style.color=error?"red":"green";
  document.getElementById("bal").innerText=balance;
  document.getElementById("amt").value="";
}

function logout(){
  balance=1000;
  document.getElementById("login").style.display="block";
  document.getElementById("atm").style.display="none";
  document.getElementById("pinInput").value="";
  document.getElementById("message").innerText="";
}
</script>

</body>
</html>
