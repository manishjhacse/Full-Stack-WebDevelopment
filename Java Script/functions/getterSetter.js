let person={
    fName:"Manish",
    lName:"Jha",
    get fullName(){
        return `${this.fName} ${this.lName}`;
    },
    set fullName(name){
        let parts=name.split(" ");
        this.fName=parts[0];
        this.lName=parts[1];
    }
}

console.log(person.fullName)
person.fullName="Manish Kumar"
console.log(person.fullName)
