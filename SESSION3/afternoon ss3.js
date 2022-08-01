// nếu thiếu biến i thì vòng lặp sẽ lặp lại mãi mãi
//






// Bài 1
// let n =prompt(` Hãy nhập vào số n để có biểu thức A = 1 + 2 + 3 + .. + n`);
// let a = 0;
// if( n % 1 === 0 && n > 0){
//  for(let i = 0 ; i <= n ; i = i + 1){
//    a = a + i;
//  }
//  console.log( `A = ${a}`);
// }
// else{
//     console.log(` Vui lòng nhập lại`);
// } 

// Bài 2
// let n=prompt(` Hãy nhập vào số n để B = 1 * 2 * 3 * .. * n`);
// let a = 1;
// if( n % 1 == 0 && n > 0){
//  for(let i = 1 ; i <= n ; i = i + 1){
//     a = a * i;
//  }
//  console.log(`B = ${a}`);
// }
// else{
//     console.log(` Vui lòng nhập lại`);
// }

// Bài 3
// let n=prompt(` Hãy nhập n để có biểu thức C = 1 + ½ + ⅓ + … + 1/n `);
// let a = 0;
// if( n % 1 == 0 && n > 0){
//     for(let i = 1 ; i <= n ; i = i + 1){
//         a = a + ( 1 / i );
//     }
//     console.log(` C = ${a}`);
// }
// else{
//     console.log(` vui lòng nhập lại`);
// }

// Bài 4
// let n =prompt(` nhập n để  A = 1 x ½  + ½ x ⅓  + ⅓ x ¼  + … + 1/(n-1) x 1/n`);
// let a = 0;
// if( n % 1 == 0 && n > 0 ){
//     for(let i = 0 ; i <= n ; i = i + 1){
//         a = a + 1/(n-1) * 1/n;
//     }
//     console.log(` D = ${a}`);
// }
// else{
//     console.log(` Vui lòng nhập lại`);
// }

// Bài 5
// let n =prompt(` hẫy nhập số n để ra bảng cửu chương của số n đó`)
// if( n > 0 && n % 1 === 0 && n <= 10){
//     for(let i = 1 ; i <= 10 ; i = i + 1){
//         console.log(  ` ${n}  *  ${i} = ${n * i}`);
//     }
// }
// else{
//     console.log(` vui lòng nhập lại`);
// }

// Bài 6
let n =prompt(` Hãy nhập số nguyên n `);
let a = 0 , b = 1 , nextTerm;
if(n > 0 && n % 1 == 0){
    for (let i = 1; i <= n ; i = i + 1){
        console.log(a )
        nextTerm = a + b;
        a = b;
        b = nextTerm;
   
    }

} 






