 
// // // 1. Write a JavaScript program that accepts two numbers in two prompts and
// // // displays the larger one in the console.

// // let num = prompt("enter number 1");
// // let num2 = prompt("enter number 2");
// //  if (num>num2)
// //  {
// //     console.log(num+" is greater!");
// //     alert(num+" is greater!")
// //  }
// //  else{
// //     console.log(num2+" is greater!");
// //     alert(num2+" is greater!")
// //  }

// // //  2. Write a JavaScript conditional statement to find the sign of a number.
// // // Display an alert box with the specified sign.
 
// // let number = prompt("enter any number");
// //  if (number >= 0)
// //  {
// //     alert(" The sign is +");
// //  }
// //  else{
// //     alert(" The sign is -");
// //  }

// // // 3. Write a JavaScript program that accepts five numbers in five prompts and
// // // displays the larger one in the console.

// //  let num = prompt("enter number 1");
// //  let num2 = prompt("enter number 2");
// //  let num3 = prompt("enter number 3");
// //  let num4 = prompt("enter number 4");
// //  let num5 = prompt("enter number 5");

// //  if (num>num2 && num>num3 && num>num4 && num>num5)
// //  {
// //     console.log(num+" is greater!");
// //     alert(num+" is greater!")
// //  }
// // else if (num2>num && num2>num3 && num2>num4 && num2>num5)
// // {
// //    console.log(num2+" is greater!");
// //    alert(num2+" is greater!")
// // }
// // else if (num3>num && num3>num2 && num3>num4 && num3>num5)
// // {
// //    console.log(num3+" is greater!");
// //    alert(num3+" is greater!")
// // }
// // else if (num4>num && num4>num3 && num4>num2 && num4>num5)
// // {
// //    console.log(num4+" is greater!");
// //    alert(num4+" is greater!")
// // }
// // else 
// // {
// //    console.log(num5+" is greater!");
// //    alert(num5+" is greater!")
// // }

// // // 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// // // will check if the current number is odd or even, and display a message to the
// // // screen.
// // // Sample Output :
// // // "0 is even"
// // // "1 is odd"
// // // "2 is even"

// // let i ;
// // for( i=0 ; i<=15 ; i++ )
// // {
// //     let number=prompt("Enter Number of your choice:") ;
// // if (number%2===0)
// // {
// //     alert(number+" is even")
// // }
// // else
// // {
// //     alert(number+" is odd")
// // }
// // }

// // // 5. Write a JavaScript program which computes the average marks of the
// // // following students Then, this average is used to determine the corresponding
// // // grade.
// // // The grades are computed as follows :
// // // Range Grade
// // // <60 F
// // // <70 D
// // // <80 C
// // // <90 B
// // // <100 A

// // let i , subjects = 5 , total=0;

// // for( i=1 ; i<=subjects ; i++)
// // {
// //     let marks= +prompt("Enter Marks of Subject "+i);
// //     total+= marks;
// // }

// // alert("Your Total Marks is "+total);
// // let average = total/subjects ;
// // alert("Average of your Marks is "+average);

// // if ( average < 60)
// // {
// //     alert("Your Grade is F");
// // } 
// // else if( average < 70)
// // {
// //     alert("Your Grade is D");
// // }
// // else if( average < 80)
// // {
// //     alert("Your Grade is C");
// // }
// // else if( average < 90)
// // {
// //     alert("Your Grade is B");
// // }
// // else if( average < 100)
// // {
// //     alert("Your Grade is A");
// // }

// // // 6. Write a JavaScript program which iterates the integers from 1 to 100. 
// // //But for multiples of three print "Fizz" instead of the number 
// // //and for the multiples of fiveprint "Buzz". 
// // //For numbers which are multiples of both three and five print "FizzBuzz"

// // for( let i=1 ; i<=100 ; i++)
// // {
// //     let number = i ;
// //     if( number % 5 === 0 && number % 3 === 0 )
// //     {
// //         alert("FizzBuzz "+number);
// //     }
// //     else if ( number % 5 === 0 )
// //     {
// //         alert("Buzz");
// //     }
// //     else if ( number % 3 === 0 )
// //     {
// //         alert("Fizz");
// //     }
// // }

// // // 7. Write a JavaScript program to construct the following pattern, using a nested
// // // for loop.
// // // *
// // // * *
// // // * * *
// // // * * * *
// // // * * * * *

let row , coloum ;
for ( row = 1 ; row <= 5 ; row ++ )
{
    for(coloum = 1 ; coloum <= row ; coloum ++)
    {
        console.log("* \t");
    }
    console.log( "\n" ); 
} 

// let star;
// for(let i=0; i<=5 ;i++){
//     for(let m=1; m<=i; m++) {
//   star += " * ";
// }
//     console.log(star);
//     star =" ";
// } 