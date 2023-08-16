// Arrow function
// special form of function
//no need to use function keyword
//no need to use paranthesis() in case of single parameter
//no need to use curly{} if single line code in fn
//no need to use return if single line of code
let invitation=name=>`welcome ${name} to the event`

console.log(invitation("manish"));


//function passing as an argument
let lowerCase=function(str){
    return str.toLowerCase();
}
let upperCase=function(str){
    return str.toUpperCase();
}

let transform=function(str,fun)
{
    return fun(str);
}

console.log(transform("manish",upperCase));