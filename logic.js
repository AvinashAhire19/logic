// reverse to givrn string  
// var a = 'welome to pune';
// // var b = a.split(" ").map(e=>{
// //     return e.split('').reverse('').join('');
// // }).join(' ')
// // console.log(b);
// var b = a.split(' ');
// for ( i = 0 ; i<=b.length; i++){
//     b[i].reverse()
// }
// console.log(b)
// ========================================================================
// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }

// console.log(reverseBySeparator());
// ==========================================================================================
// function multiply(a) {
//     return function(b) {
//         return function(c){
//             return a * b * c;
//         }
     
//     }
//   }
  
//   console.log(multiply(2)(2)(4)); //16
// =================================================================================================

// function fullName() {
//     return "Hello, this is " + this.first + " " + this.last;
//   }
  
//   console.log(fullName()); // => Hello this is undefined undefined
  
//   // create a person object and pass its values to the fullName function
//   var person = {first: "Foo", last: "Bar"};
//   console.log(fullName.bind(person)()); // => Hello this is Foo Bar

// ===============================================================================================
switch (grade) {
    case 'A': document.write("Good job<br />");
    break;
 
    case 'B': document.write("Pretty good<br />");
    break;
 
    case 'C': document.write("Passed<br />");
    break;
 
    case 'D': document.write("Not so good<br />");
    break;
 
    case 'F': document.write("Failed<br />");
    break;
    
    case 'F': document.write("Failed<br />");
    break;
 
    default:  document.write("Unknown grade<br />")
 }
 console.log("Exiting switch block");
