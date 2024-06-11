class Naruto {
    constructor (email, password){
        this.gmail = email;
        this.Zone = password;
    }

    Confirmation(){
      let  pattern = /[a-z0-9]+@[a-z]+\.[a-z]/;
    
      if(this.gmail == ""){
             alert("Mail Can't be blank")

      }

       else if(this.gmail.search(pattern) == -1){
                alert("Enter Valid Email Address")
        }

        else if(this.Zone == ""){
                alert("Password can't be blank")

        }

        else if(this.Zone.length < 6){
            alert("Use Strong Password")
        }



        else {
            document.write("Login Succesful")
        }
        }

        

    
    
    
   
       }