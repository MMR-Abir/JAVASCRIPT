class Validation{
    constructor (email){
        this.mail = email;
    }

    validate(){
        var pattern =/[a-z0-9]+@[a-z]+\.[a-z]/;
        // var pattern1 =/[]/ ;

        //  if(this.mail=="" ){
        //     alert("Can't be empty")
        //   }
       if(this.mail.search(pattern)==-1){
            alert("Please Enter a valid Email")
        }
    
        
    else {
        alert("Valid Email Address");
    }
      }  
}