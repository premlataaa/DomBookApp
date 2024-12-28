import { baseUrl } from "./baseUrl";

const loginData = JSON.parse(localStorage.getItem("loginData"));

if(!loginData || loginData.email !=="admin@empher.com"){
    alert("Admin not Logged In");
    window.location.href="index.html"
}

document.getElementById("logoutButton").addEventListener("click",function(){
alert("Are you sure to Delete..?");
 
localStorage.removeItem("loginData");

window.location.href="index.html"
});

document.getElementById("verifyBook").addEventListener("click",async function () {
    const title = document.getElementById("title").Value.trim();
    const author = document.getElementById("author").Value.trim();

    const bookData={
        title:title,
        author: author,
        category:select,
    };   

    try{
        const response = await fetch(`${baseUrl}/books`,{
            method:"POST",  
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookData),
        })

        if(response.ok){
            alert("Book added successfully");
            document.getElementById("title").value="";
            document.getElementById("author").value="";
        }else{
            alert("failed to catch book")
        }
           
        
        
    }catch(err){
        console.log(err);
        alert("something went wrong,please try agin later")
    }
})