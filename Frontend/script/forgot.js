let email=document.getElementById("email")
let forgot=document.querySelector("button")
let enteremail=document.getElementById("Enteremail")
let Card=document.getElementById("Card")

let login=JSON.parse(localStorage.getItem("logindata"))||[]
   console.log(login)

forgot.addEventListener("click",function(){
if(email.value==""){
    alert("Please Enter Your Email")
}else{
   if(check(login)){
     
  Card.innerHTML=""
     update()
   }else{
    alert("Email is wrong")
   }

}
})

function check(data){
for(let i=0; i<data.length; i++){
    
      if(email.value==data[i].email){
        return true
      }
}
return false
}

function update(){

let p1=document.createElement("p")
p1.setAttribute("class","p1")
p1.innerText="Create New Password"
let input1=document.createElement("input")
input1.setAttribute("placeholder","Create New Password")
let button1=document.createElement("button")
button1.innerText="Create Password"
button1.setAttribute("class","button1")
Card.append(p1,input1,button1)




button1.addEventListener("click",function(){
if(input1.value!=""){
for(let i=0; i<login.length; i++){
    if(email.value==login[i].email){
        login[i].password=input1.value
        
        
        localStorage.setItem("logindata",JSON.stringify(login))
       
        open("Signin.html")
       break;
    }
}
}else{
alert("Please enter Password")
}
})

}