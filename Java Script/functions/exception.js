let person={
    fName:"Manish",
    lName:"jha",
    get fullName(){
        return `${this.fName} ${this.lName}`
    },
    set fullName(name){
        if(typeof name!= "string"){
            throw new Error("you have not entered a string");
        }
        let parts=name.split(" ");
        this.fName=parts[0];
        this.lName=parts[1];
    }
}

console.log(person.fullName)
try{
    // person.fullName=5
    person.fullName="Manish Kumar"
    console.log(`full name is ${person.fullName}`)
}
catch(e){
    alert(e)
}
