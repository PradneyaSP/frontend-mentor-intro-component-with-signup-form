document.addEventListener("submit", (e) => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (firstName.value == "") {
    e.preventDefault();
    errorDisplay("#firstName");
    document.querySelector(".error1").innerHTML = "First Name cannot be empty";
    document.querySelector("#firstName").addEventListener("click",()=>{
        resetError("#firstName",1);
    })
  }
  if (lastName.value == "") {
    e.preventDefault();
    errorDisplay("#lastName");
    document.querySelector(".error2").innerHTML = "Last Name cannot be empty";
    document.querySelector("#lastName").addEventListener("click",()=>{
        resetError("#lastName",2);
    })
  }
  if (email.value == "") {
    e.preventDefault();
    errorDisplay("#email");
    document.querySelector(".error3").innerHTML = "Email cannot be empty";
    document.querySelector("#email").addEventListener("click",()=>{
        resetError("#email",3);
    })
  }
  else if(!email.value.includes("@")){
    e.preventDefault();
    errorDisplay("#email");
    document.querySelector(".error3").innerHTML = "Email must include '@'";
    document.querySelector("#email").addEventListener("click",()=>{
        resetError("#email",3);
    })
  }
  if (password.value == "") {
    e.preventDefault();
    errorDisplay("#password");
    document.querySelector(".error4").innerHTML = "Password cannot be empty";
    document.querySelector("#password").addEventListener("click",()=>{
        resetError("#password",4);
    })
  }
});

function errorDisplay(id,n){
    document.querySelector(id).classList.add("errorImage");
    document.querySelector(id).classList.add("errorInput");
    document.querySelector(id).classList.add("shake-horizontal");
}

function resetError(id,n){
    document.querySelector(id).classList.remove("errorImage");
    document.querySelector(".error"+n).innerHTML = "";
    document.querySelector(id).classList.remove("errorInput");
    document.querySelector(id).classList.remove("shake-horizontal");
}