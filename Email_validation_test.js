class FindOut {
    constructor (email){
        this.gmail = email;
    }


        validate(){
           let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/i;

            if( this.gmail.search(pattern) == -1 ){
                alert("Is not Valid");
            }

            else {
                alert("is valid");
            }
        }





}