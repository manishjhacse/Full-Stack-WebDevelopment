function createRectangle(len,bre){
    let rectangle={
        length: len,
        breadth: bre,

         draw(){
            console.log("drawing rectangle")
        }
    };
    return rectangle;
}
let rectangleObj1=createRectangle(6,9);

//constructor function

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function()
    {
        console.log("drawing")
    }
}

//creating  object using constructor function
let rectangleObj2=new Rectangle(2,12);
console.log(rectangleObj2)

rectangleObj2.color="red";
console.log(rectangleObj2)
delete rectangleObj2.color;
console.log(rectangleObj2)
////



let x=10;
let y=x;
x++;
console.log(x)
console.log(y)



let a={
    value:10
};
let b=a;
a.value++;
console.log(a.value)
console.log(b.value)


