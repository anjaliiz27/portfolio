console.log("Hello!,loading Sree Geetanjali's portfolio");

const navLinks=document.querySelectorAll("nav href");

for(var i=0;i<navLinks.length;i++){
   document.querySelectorAll("nav href")[i].addEventListener("click",function(event){
    event.preventDefault();

     const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
})
}

document.querySelector("button").addEventListener("click", function(event){
     event.preventDefault();
     alert("submitted succesfully!");
   
     document.getElementById("name").value=" ";
     document.getElementById("email").value=" ";
     document.getElementById("message").value=" ";
  
})

