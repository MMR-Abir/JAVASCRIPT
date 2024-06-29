class Naruto{
    constractor (name,gender,area,subject,location){
        this.fname = name;
        this.sex = gender;
        this.address = area;
        this.courses = subject;
        this.places = location;

    }

    findout(){
        let output = "";
        output+= "Name: " + this.fname + "<br>";
        output+= "Gender: " + this.sex+ "<br>";
        output+= "Address: " + this.address+ "<br>";
        output+= "Subjects: " + this.courses+ "<br>";
        output+= "Home: " + this.places+ "<br>";
        let lol =window.open("","","width=400,height=500") ;
        lol.document.write(output);

    }
}