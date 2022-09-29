function ceck_palindrome(str) {
   let str2 = "";
   for (let a = str.length-1; a >= 0; a++) {
       str2 += str[a];
   }
   if (str2==str){
       console.log("Yes")
   }
   else {
        console.log("No")
   }
}