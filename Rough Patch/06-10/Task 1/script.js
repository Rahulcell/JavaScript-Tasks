// Base class
class Member {
    constructor(name, memberID) {
        this.name = name;
        this.memberID = memberID;
    }

    displayProfile() {
        console.log(`Name: ${this.name}, Member ID: ${this.memberID}`);
    }
}

class Student extends Member {
    constructor(name, memberID, grade) {
        super(name, memberID);
        this.grade = grade;
    }

    displayProfile() {
        super.displayProfile(); 
        console.log(`Grade: ${this.grade}`);
    }
}

class Teacher extends Member {
    constructor(name, memberID, subject) {
        super(name, memberID); 
        this.subject = subject;
    }

    displayProfile() {
        super.displayProfile();
        console.log(`Subject: ${this.subject}`);
    }
}

const student = new Student("Alice", "S123", "10th");
const teacher = new Teacher("Mr. Smith", "T456", "Mathematics");
 
console.log(student.grade)