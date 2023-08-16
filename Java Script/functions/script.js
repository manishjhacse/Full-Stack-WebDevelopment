function print()
{
    console.log("This is a function called print");
}
print();
let fun=function(){
    console.log("this is a function ")
}
fun();

let invitation=function(name="jha")
{
    console.log("welcome "+name+" you are invited");
    console.log(`welcome ${name} you are invited`);
}

invitation("manish")
invitation("manihs jha")
invitation();


let ageCalculator=function(birthYear,currentYear=2023){
    let age=currentYear-birthYear;
    return age;
}
console.log("your age is "+ageCalculator(2002));
