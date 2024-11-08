class Classroom{
    constructor(){
        this.students = [];
    }
    add(student){
        this.students.push(student)
    }
    delete(name){
        for(i=0;i<this.students.length;i++){
            if(name == this.students[i].name){
                delete this.students.name;
                delete this.students.grade;
                console.log("Deleted Student Details Succesfully")
            }else{
                console.log("name  not found please enter the correct name")
            }
        }
    }
    displayStudents(){
        console.log("list of all students")
        this.students.forEach(el => {
            console.log(el.name + " " + el.grade)
        })
    }
}

class Students{
    name;
    grade;
    constructor(name , grade){
        this.name = name;
        this.grade = grade;
    }
}
let rahul = new Students("rahul" , "9.0");

let jay = new Students("jay" , "8.5");

let sravan = new Students("sravan" , "9.5");

let saiTeja = new Students("Sai Teja" , "9.7");

let yashwanth = new Students("Yashwanth" , "9.8");

let sanith = new Students("sanith" , "9.6");


let classroom = new Classroom();

classroom.add(rahul);
classroom.add(jay);
classroom.add(sravan);
classroom.add(saiTeja);
classroom.add(yashwanth);
classroom.add(sanith);

classroom.displayStudents();