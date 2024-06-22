class Naruto {
    constructor (email,password){
        this.gmail = email;
        this.Zone = password;
    }

    Confirmation(){
      let  pattern = /[a-z0-9]+@[a-z]+\.[a-z]/;
       let pattern1 = /^[0-9]+$/;
      

        if(this.gmail.search(pattern) == -1){
                alert("Enter Valid Email Address")
        }

        else if(this.Zone.search(pattern1) == -1){
                alert("Use Only Number")
        }

        // else if(this.Zone.search(pattern1) < 6){
        //     alert("Use Strong Password")
        // }



        else {
            document.write("Login Succesful")
        }
        }

        

    
    
    
   
       }