document.addEventListener("submit", (e) => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (firstName.value == "") {
    e.preventDefault();
    errorDisplay("#firstName");
    document.querySelector(".error1").innerHTML = "First Name cannot be empty";
    document.querySelector("#firstName").addEventListener("click", () => {
      resetError("#firstName", 1);
    });
  }
  if (lastName.value == "") {
    e.preventDefault();
    errorDisplay("#lastName");
    document.querySelector(".error2").innerHTML = "Last Name cannot be empty";
    document.querySelector("#lastName").addEventListener("click", () => {
      resetError("#lastName", 2);
    });
  }

  const validEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  if (email.value == "") {
    e.preventDefault();
    errorDisplay("#email");
    document.querySelector(".error3").innerHTML = "Email cannot be empty";
    document.querySelector("#email").addEventListener("click", () => {
      resetError("#email", 3);
    });
  } else if (!validEmail(email.value)) {
    e.preventDefault();
    errorDisplay("#email");
    document.querySelector(".error3").innerHTML = "Email is incorrect";
    document.querySelector("#email").addEventListener("click", () => {
      resetError("#email", 3);
    });
  }

  const validPassword = (password) => {
    const symbols = /[~!@#$%^&*]/.test(password);
    const nums = /[0-9]/.test(password);
    return symbols&&nums;
  }

  if (password.value == "") {
    e.preventDefault();
    errorDisplay("#password");
    document.querySelector(".error4").innerHTML = "Password cannot be empty";
    document.querySelector("#password").addEventListener("click", () => {
      resetError("#password", 4);
    });
  }
  else if(password.value.length < 7){
    e.preventDefault();
    errorDisplay("#password");
    document.querySelector(".error4").innerHTML = "Password cannot be less than 7";
    document.querySelector("#password").addEventListener("click", () => {
      resetError("#password", 4);
    });
  }
  else if(!validPassword(password.value)){
    e.preventDefault();
    errorDisplay("#password");
    document.querySelector(".error4").innerHTML = "Password must contain a letter and a symbol";
    document.querySelector("#password").addEventListener("click", () => {
      resetError("#password", 4);
    });
  }
});

function errorDisplay(id, n) {
  document.querySelector(id).classList.add("errorImage");
  document.querySelector(id).classList.add("errorInput");
  document.querySelector(id).classList.add("shake-horizontal");
}

function resetError(id, n) {
  document.querySelector(id).classList.remove("errorImage");
  document.querySelector(".error" + n).innerHTML = "";
  document.querySelector(id).classList.remove("errorInput");
  document.querySelector(id).classList.remove("shake-horizontal");
}
