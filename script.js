document.getElementById("input").addEventListener("submit", function (event) {
    event.preventDefault();
    const mail = document.getElementById("email").value;
    const MDP = document.getElementById("motDepasse").value;
  
    if (mail == "Tony@gmail.com" && MDP == "borykely") {
      window.location.href = "";
    } else {
      alert("Login error");
    }
  });