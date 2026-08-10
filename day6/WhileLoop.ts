//while loop : A while loop executes as long as the condition is true.
//syntax
/* while (condition) {
  statement;
}
 */

//Example1: print 1.......10
/* let num:number=1;  //Inilization
while(num<=5){
console.log(num);
num++;
}
 */

//Method1
// Example 2: print even numbers 1.....10
/* let i:number=2;
while(i<=10){
console.log(i)
i+=2;
} */

//Method2:
/* let i:number=1;
while(i<=10){
    if(i%2==0){
        console.log(i);
    }
    i++;
}
 */
// Example 3: print odd numbers 1.....10

/* let i: number = 1;
while (i <= 10) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}
 */
// Example 4: print numbers 10 9 8 ......1

/* let i:number=10;
while(i>=1){
console.log(i)
i--;
} */

// Example 4: print numbers 10  8 ......2

/* let i:number=10;
while(i>=1){
console.log(i)
i-=2;
}
 */

//infinite loop - when the condition never become false then it will go to infinite loop
/*while(true)
{
    console.log(1);
}
*/
