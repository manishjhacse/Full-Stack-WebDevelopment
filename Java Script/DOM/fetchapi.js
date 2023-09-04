// async function utility(){
//     let content= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output= await content.json();
//     console.log(output);
// }
// utility();
// async function helper(){

//     let options={
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'manish',
//             body: 'bar',
//             weight:52,
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
//     let content=await fetch('https://jsonplaceholder.typicode.com/posts',options)
//     let response=content.json();
//     return  response;
// }

// async function utility(){

//     let ans=await helper();
//     console.log(ans);
// }

// utility();


//clouser(refrences not copy)

// function outer(){
//     let name="Manish"
//     function inner(){
//         console.log(name);
//     }
//     return inner();
// }

// let fn=outer();
// fn();
