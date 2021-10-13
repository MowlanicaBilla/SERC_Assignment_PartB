document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);



function signin() {
  
    var x= document.getElementById("email").value;
 var y = document.getElementById("password").value;
 if (x== null ||x== "") {
        alert("Please enter the admin email-id.");
         return false;
               }
   if (y== null ||y== "") {
          alert("Please enter the admin password.");
           return false;
                 }

     if(x!="admin@iiit.ac.in" && y!="admin")
     {
     alert('Login un-successful');

     
     }
     
     if(x=="admin@iiit.ac.in" && y=="admin")
     {
     alert('Login successful');

     location.replace("index.html");
     }
    }