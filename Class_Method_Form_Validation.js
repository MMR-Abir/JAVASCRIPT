class Shisui{
    constructor (name,contact,sex,courses,location){
        this.Fullname = name;
        this.Connect = contact;
        this.SEXUAL = sex;
        this.sUBLECT = courses;
        this.lOCATE = location;
    }

    Danzo(){
        let output = "<h2>Traniee Information</h2>" 
         output +="Name: " +this.Fullname + "<br>";
         output +="Number: " +this.Connect + "<br>";
         output +="Gender: " +this.SEXUAL + "<br>";
         output +="Courses: " +this.sUBLECT + "<br>";
         output +="Location: " +this.lOCATE + "<br>";
         let nw = window.open("","","width=500 ,height=600") ;
         nw.document.write(output) ;

    }
}