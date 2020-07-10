// for(i=0;i<=5;i++)
// console.log(i);

// function findingMaxValue(a,b){
//     if(a>b)
//         console.log('the max of two numbers is  '+ a );
//     else
//         console.log('the max of two numbers is  '+ b );
// }

// findingMaxValue(12, 13);
// function isLandscape(width, height){
//     if(width>height)
//     return true;
// }
// console.log(isLandscape(876,445));

// const output=fizzBuzz(7);
// console.log(output);
// function fizzBuzz(input){
// if(typeof (input) !== "number")
// return 'not a number';
// else{
// if((input%3)==0 && (input%5)==0 )
// return 'fizzbuzz';
// else if((input%5)==0)
// return 'buzz';     
// else if((input%5)==0)
// return 'buzz';
// else 
// return input;
// }
// }

// showNumbers(15);
// function showNumbers(limit){
//     for(i=0;i<=limit;i++){
//     let type=(i%2==0) ? 'EVEN' : 'ODD';
//     console.log('['+i+']:'+type);
//     }
// }

// const array=[null,3,8,9,0,false];
// function countTruthy(array)
// {let count=0;
//     for(let v of array)
//     {   if(v){
//         console.log(v);
//         count++;
//     }
//     }
//     console.log('counttruthy:' + count);
// }
// countTruthy(array);

// const movie={
//     title:'a',
//     releaseYear:2018,
//     rating:4.5,
//     director:'b'
// };
// showProperties(movie);
// function showProperties(obj){
//     for(let o in obj){
//         if(typeof(obj[o])==="string")
//         console.log(o,obj[o]);
//     }
// }

// console.log(sum(10));
// function sum(limit){
//     let sum=0;
//     for(let counter=0;counter<=limit;counter++){
    
//     if(counter%3 === 0 || counter%5 === 0){
//         sum+=counter;
//     }
//     }
//     return sum;
// }

// const marks=[80,80,50];
// console.log(calculateGrade(marks));
// function calculateGrade(marks){
//     let sum=0;
//     for (let key of marks) {
//         sum+=key;
//     }
//     let average=sum/marks.length;
//     if(average<60) return 'F';
//     if(average<70) return 'D';
//     if(average<80) return 'C';
//     if(average<90) return 'B';
//     return 'A';
// }

// showStars(5);
// function showStars(rows){
//     for(let i=1;i<=rows;i++){
//         let num='';
//         for(let j=1;j<=i;j++)
//         num+='*';
//         console.log(num);
//     }
// }

// showPrimes(20);
// function showPrimes(limit){
//     for(let i=2;i<=limit;i++){
//         let isPrime=true;
//         for(let j=2;j<i;j++){
//             if (i%j===0){
//             isPrime=false;
//             break;}
//         }
//         if(isPrime) console.log(i);
//     }
// }

// function Circle(radius){
//         this.radius=radius;
//         this.draw=function(){
//             console.log('draw');
//          }
// }
// const circle1= new Circle(1);
// console.log(circle1);

// const address={street:'cavecreekrd' , 
//     city: 'phoenix', zipcode:'85024'
// };
// function showAddress(address){
//     for(let key in address)
//     console.log(key,address[key]);
// }
// showAddress(address);

// function factoryAddress(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode

//     };
// }
// const address=factoryAddress('cavecreekrd','phoenix','85025');
// console.log(address);

// function ConstructorAddress(street,city,zipcode){
//       this.street=street;
//         this.city=city;
//         this.zipcode=zipcode;
// }
// const address1=new ConstructorAddress('cavecreekrd1','phoenix1','850251');
// console.log(address1);

// let address1=new Address('a', 'b', 'c');
// let address2=new Address('a', 'b', 'c');
// let address3=address1;
// function Address(street,city,zipcode){
//     this.street=street;
//     this.city=city;
//     this.zipcode=zipcode;
// }
// function areEqual(address1,address2){
// return address1.street===address2.street && 
// address1.city===address2.city &&
// address1.zipcode===address2.zipcode;
// }
// function areSame(address1,address2){
// return address1===address2;
// }
// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));
// console.log(areSame(address1,address3));

// let blogPost={
//     title:'The Secret',
//     body:'Secret of life',
//     author:'arch',
//     views:50,
//     comments:[
//         {author:'xyz',body:'z'},
//         {author:'abc',body:'c'}
//     ],
//     isLive:true
// };
// console.log(blogPost);

// const first=[{id:1}];
// const second=[3,4,5];
// const combined=first.concat(second);
// first[0].id=2;
// console.log(combined);

// const numbers=arrayFromRange(-10,-4);
// console.log(numbers);
// function arrayFromRange(min, max){
//     let array=[];
//     for(let a=min;a<=max;a++){
//         array.push(a);
//     }
//     return array;
// }

const numbers=[1,2,3,4];
//console.log(numbers.includes(1));
console.log(includes(numbers,1));
function includes(array, searchElement){
for(let key of array){
    array.find(function(searchElement){
       return key===searchElement;
    }
    );
}
}