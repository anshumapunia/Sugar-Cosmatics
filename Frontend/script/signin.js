let email=document.getElementById("email")||""
let password=document.getElementById("password")
let signin=document.querySelector("button")

let login=JSON.parse(localStorage.getItem("logindata"))||[]
   console.log(login)

signin.addEventListener("click",function(){

if(email.value=="" || password.value==""){
    alert("Please Full all details")
}
  else if(check(login)){
        window.location.href="./index.html"
   }else{
    alert("Wrong Password Or Wrong Email")
   }
//    window.reload();


}

)

function check(data){
email.innerHTML=''
password.innerHTML='';
for(let i=0; i<data.length; i++){
    
      if(email.value==data[i].email && password.value==data[i].password){
        return true
      }
}
return false
}


function signib(){
  open("signin.html");
}

function forgot(){
    window.location.href = "./forgot.html"
}
function signup(){
  window.location.href = "./signup.html"
}