let rectangle={
    length:5,
    breadth:6,
    area:function()
    {
        return this.length*this.breadth
    }
}
for(let key in rectangle)
{
    console.log(key,rectangle[key])
}
for(let key of Object.keys(rectangle))
{
    console.log(key)
}
for(let key of Object.entries(rectangle))
{
    console.log(key)
}

if('length' in rectangle)
{
    console.log("Present")
}
else{
    console.log("Absent")
}
if('area' in rectangle)
{
    console.log("Present")
}
else{
    console.log("Absent")
}
if('radius' in rectangle)
{
    console.log("Present")
}
else{
    console.log("Absent")
}