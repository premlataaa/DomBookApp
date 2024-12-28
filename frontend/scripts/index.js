const form = document.getElementById("form")

form.addEventListener("submit", function(){
    event.preventDefault()

    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password)

    if(email=="admin@empher.com" && password== "empher@123"){
        alert("redirecting to admin page")
        window.location.href="admin.html"
    }else if(email=="user@empher.com" && password== "user@123"){
        alert("redirecting to Books")
        window.location.href="books.html"
    }else{
        alert("Please submit correct Email or Password")
    }
})

function loginData(){
    fetch(`&{baseUrl}/user`)
    .then((res)=>res.json())
    .then((data)=>{
        displayData(data);
    }).catch((err)=>{
        alert("something went wrong");
        console.log(err);
    })
    
}