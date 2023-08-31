// function print()
// {
//     console.log("This is a function called print");
// }
// print();
// let fun=function(){
//     console.log("this is a function ")
// }
// fun();

// let invitation=function(name="jha")
// {
//     console.log("welcome "+name+" you are invited");
//     console.log(`welcome ${name} you are invited`);
// }

// invitation("manish")
// invitation("manihs jha")
// invitation();


// let ageCalculator=function(birthYear,currentYear=2023){
//     let age=currentYear-birthYear;
//     return age;
// }
// console.log("your age is "+ageCalculator(2002));

// function sum(a,b)
// {
//     console.log(arguments)//object of argument
//     return a+b;
// }
// console.log(sum(1,3));
// console.log(sum(1));
// console.log(sum());
// let ans=sum(1,2,3,4,5,8)
// console.log(ans)
// function sum()
// {
//     let total=0;
//     for(let val of arguments){
//         total=total+val;
//     }
//     return total;
// }
// let ans=sum(1,2,4,5,6,7,8)
// console.log(ans)
// console.log(sum(5,5,2,4,7,8,10,20))


// function sum(a,...restArgs)
// {
//     console.log(restArgs);//this is an array for all the rest arguments passed to the function and it should be at end
// }
// sum(1,2,3,4,5,6,7,8)

