let email=document.getElementById("email")||""
let password=document.getElementById("password")
let left=document.querySelector(".left")
 let button=document.querySelector("#Signup")
 
 let data=JSON.parse(localStorage.getItem("logindata"))||[]
  


 button.addEventListener("click",function(el){
    
     let obj={
             email:email.value,
             password:password.value
         }
     if(check(data)==true ){
         alert("Sorry You are already our customer,Please go direct in signin")
        
         window.location.href="signin.html"
      }else if(email.value=="" || password.value==""){
      alert ("Please Fill All Detail")
      }
      else{
         data.push(obj) 
        localStorage.setItem("logindata",JSON.stringify(data))
        alert("Your Detail Has Saved")

        window.location.href="signin.html"
      }
     //  window.location.href="index.html"
  }
     
)

 function check(data){
     for(let i=0; i<data.length; i++){
     if(data[i].email==email.value){
          return true

     }
 }
 return false
}


function Signin(){
 open("Signin.html")
}
let count=0
setInterval(() => {
 if(count==0)
 {
     count++
 left.innerHTML=""
 let img=document.createElement("img")
 img.setAttribute("src","https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=384&q=75")
 left.append(img)
}
else if(count==1)
{
 count++
 left.innerHTML=""
 let img=document.createElement("img")
 img.setAttribute("src","https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F07_6fa35950-4830-4e97-80ea-d40f2fb42801.jpg%3Fv%3D1680622820&w=384&q=75")
 left.append(img)
}
else if(count==2)
{
 count=0
 left.innerHTML=""
 let img=document.createElement("img")
 img.setAttribute("src","https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=384&q=75")
 left.append(img)
}
else if(count==3)
{
 count=0;
 left.innerHTML=""
 let img=document.createElement("img")
 img.setAttribute("src","https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_044847a5-bda3-4987-ac04-5bca0ff63193.jpg%3Fv%3D1680073209&w=384&q=75")
 left.append(img)
}
}, 3000);