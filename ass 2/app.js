// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addno(anyNumber){
    return function(number){

     console.log(number + anyNumber);

    }
}
let newNumber = addno(2);
let newNumber2 = addno(8); 
newNumber(5);
newNumber2(2);

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

let array = ["",5,32,7,8,9,6,69,78];

 function find(array,number){
    if(number === array[0])
        {
             return true;
        }
    else if(array.length === 0)
    {
        return false;
    }
        else
        {
            return find(array.splice(1),number);
        }
    }
console.log(find(array,32));

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function write(string)
{
    let body = document.querySelector("body") ;
    body.innerHTML = "<p> </p>";
    let myContent = document.querySelector("p") ;
   myContent.innerHTML=string;
   console.log(myContent);
}
write(prompt("Enter Your Text"));


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function write(string)
{   
    const body = document.querySelector("ul") ;
    body.innerHTML = "<li> </li>";
   const myList = document.querySelector("li");
   myList.innerHTML=string;
   console.log(myList);
}
write("books");
write("pen");
write("ink");

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function give(element,color)
{
  let id = document.querySelector("#"+element);
  id.style.backgroundColor=color;
}
give("p","wheat");
give("h","pink");

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let mySelf = {
   myName:"Fasiha",
   center:"SMIT"
};
function object(key,objname)
{
localStorage.setItem(key,objname);
}
let stringify = JSON.stringify(mySelf);
object("myself",stringify);

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function retrieve(key)
{
let giving = localStorage.getItem(key) ;
 return giving ;
}
let object =
{
    myName:"Fasiha",
    center:"SMIT",
    rollNo:12
};
let stringConverter = JSON.stringify(object);
localStorage.setItem("myObject",stringConverter);
console.log(retrieve("myObject"));

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveStorage(key,value)
{
    let stored = localStorage.setItem(key,value);
    return stored;
    
}
let myObject =
{
    myName:"Fasiha",
    center:"SMIT",
    rollNo:12 
}

 saveStorage("myName","Fasiha");
 saveStorage("center","SMIT");
 saveStorage("rollNo","12");


