// if(true)
// {
//     var x=10;
//     console.log("X: ",x);
// }
// console.log("X: ",x);
// if(true)
// {
//     var x=10;
//     console.log("X: ",x);
//    var  x=20;
//      console.log("X: ",x);


// let x=10;
//     console.log("X: ",x);
// let  x=20;
//      console.log("X: ",x);

// const x=20;
//  console.log("X: ",x);
//    x=30;
// console.log("X: ",x);
// }
//  console.log("X: ",x);


// let x=10;
// console.log(x);
// console.log(typeof(x));
// x="ABC";
// console.log(x);
// console.log(typeof(x));

// let x=true;
// let y=null;
// let z;
// let a=12344253253253453453443543254325425422222223456775644646n;
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(a));


// let age=20;
// if(age>20){
//     console.log("eligible");
// }
// else{
//     console.log("not eligible");
// }

// if(age>20){
//     console.log("eligible");
// }
// else if(age==20){
//    console.log("great");
// }
// else{
// console.log("not eligible");
// }

// let choice=5;
// switch(choice){
//     case 1:console.log("case 1 executed..");
//     break;
//     case 2:console.log("case 2 is executed");
//     break;
//     case 3:console.log("case 3 is executed");
//     break;
//     case 4:console.log("case 4 is executed");
//     break;
//     default:console.log("please enter the valid choice");
// }


// for(let i=1;i<=10;i++){
//     console.log(i);

// }
// let x=1;
// while(x<=10)
// {
//     console.log(x);
//     x++;
// }

// let x=121;
// let temp=x;
// let rev=0;
// while(temp>0){
//     let rem=temp%10;
//     rev=rev*10+rem;
//     temp=Math.floor(temp/10);
    
// }
// if(x==rev)
// {
//     console.log("its a palindrome");

// }
// else{
//     comsole.log("its not a plaidrme");
// }


// for( i=1;i<=1000;i++){
//     let temp=i;
// let rev=0;
// while(temp>0){
//     let rem=temp%10;
//     rev=rev*10+rem;
//     temp=Math.floor(temp/10);
//     }
//    if(i==rev)
//    {
//     console.log(i);
//    }
// }
// for(let num=1;num<=1000;num++){
// let flag=true;
// for(let i=2;i<=num/2;i++)
// {
//     if(num%i==0){
//         flag=false;
//         break;
//     }
// }
// if(flag==true)
// {
//     console.log(num);
// }
// }

//array
// let num=[10,20,30,40,50];
// console.log(num);

// let num=new Array(10,20,30,40);
// console.log(num);

// let data=[10,20,30,10,20,"ABC",true]
// console.log(data);
// console.log(data[2]);
// data[1]=100;
// console.log(data);
// console.log(data.length);
// for(let i=0;i<=data.length-1;i++)
// {
//     console.log(data[i]);
// }
// for(let x of data){
//     console.log(x);
// }
// data.push(200);
//data.unshift(500);//add first
//data.pop();
// data.shift();//pop from first
// console.log(data);
// console.log(data.indexOf(20));
// data.sort();
// console.log(data);
// data.reverse();
// console.log(data);


// let data=[10,200,300,210,1,100,5];
// let n=data.length;
// for(let i=0;i<n-1;i++){
//     let min=i;
//     for(let j=i+1;j<n;j++)
//     {
//         if(data[j]<data[min]){
//             min=j;
//         }
//     }
// temp=data[i];
// data[i]=data[min];
// data[min]=temp;
        
//     }
// console.log(data);


///functions

// function display(){
//  console.log("Good Afternoon");
//  console.log("how are you");
//  console.log("welcome to java script session");
// }
// display();
// console.log(".........After 10 minutes....");
// display();
// console.log(".........After 20 minutes....");
// display();

// function Greet(name){
//     console.log("welcome:",name);
// }
// Greet("Ajay");
// Greet("Sachin");

//name function
// function add(first,sec)
// {
//     return first+sec;
// }
// let result=add(10,20);
// console.log("result",result);

// //anonyms func
// let display=function(name){
//     console.log("welcome:",name);
// }
// display("Ram");

// let display=function(first,sec){
//     return first+sec
// }
// console.log("result:",display(10,20));

//arrow function
// 
// let display=(name)=>{
//     console.log("welcome",name);
// }
// display("ajay");
//or
// let display=(name)=>console.log("welcome",name);
// display("ajay");

// let result=(x,y)=> x+y;
// console.log("Result:",result(30,50));

//if i want to display after sometime
// setTimeout(()=>{

// },timeout);

// let display=setTimeout(()=>{
// console.log("welcome")
//  },5000);
//  display;


// function Greet(name,callback){
//     console.log("hello!",name);
//     callback();
// }
// function sayBye(){
//     console.log("bye");
// }
// Greet("Sachin",sayBye);//argument

// function Greet(name="Guest"){
//     console.log("hello!",name);

// }
// Greet("Sachin");
// Greet("Aditya");
// Greet();


// objects in javascript

let emp={
    id:111,
    name:"Ajay",
    city:"Mangalore"
}
// console.log(emp);
// // console.log(emp.name);
// // console.log(emp["name"]);

// emp.salary=50000;//add any key propeerties
// console.log(emp)

//retrieve property one by one
// for(let key in emp){
//     console.log("Key:"+key+"Value:"+emp[key]);
// }
//op:  
//  Key:idValue:111
// Key:nameValue:Ajay
// Key:cityValue:Mangalore

// let{id,name,age,city}=emp;
// console.log(id);
// console.log(name);
// console.log(city);
// console.log(age);

