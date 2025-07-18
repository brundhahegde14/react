// import{add,sub,mul} from"./third.js"; 
// let result=add(10,20);
// console.log("result:",result);
// let sub_result=sub(10,20);
// console.log("result:",sub_result);
// let mul_result=mul(10,20);
// console.log("result:",mul_result);

//if only one function is there
// import add from "./third.js";
// let result=add(10,20);
// console.log("result:",result);

//synchronous programming
// console.log("program started....");
// console.log("fetching data from Api");
// console.log("closing our application");

//asynchronous
// console.log("program started....");
// setTimeout(()=>{
// console.log("fetching data from Api");
// },500);
// console.log("closing our application");


//callback
// const datas=[
//     {name:"ABC",Profession:"software developer"},
//     {name:"DEF",Profession:"software tester"}
// ];
// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}-${data.Profession}</li>`
        
//     })
//     document.body.innerHTML=output;
// },3000);
// }
// function createData(newData,callback){
//     setTimeout(()=>{
//         datas.push(newData);
//         callback();
//     },5000);
// }
// createData( {name:"XYZ",Profession:"Database admin"},getDatas);
// getDatas();


///promise
// const datas=[
//     {name:"ABC",Profession:"software developer"},
//     {name:"DEF",Profession:"software tester"}
// ];
// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}-${data.Profession}</li>`
        
//     })
//     document.body.innerHTML=output;
// },3000);
// }
// function createData(newData){
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//         datas.push(newData);
//         let error=true;//also false  for executing resolve if true error is generatod
//         if(!error){
//             resolve();
//         }
//         else{
//             reject("some error occured");
//         }
//     },5000);
//     })
    
// }
// createData( {name:"XYZ",Profession:"Database admin"}).then(getDatas)
// .catch(err=>console.log(err));
// getDatas();


///async await
const datas=[
    {name:"ABC",Profession:"software developer"},
    {name:"DEF",Profession:"software tester"}
];
function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}-${data.Profession}</li>`
        
    })
    document.body.innerHTML=output;
},3000);
}
function createData(newData){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
        datas.push(newData);
        let error=false;//also false  for executing resolve if true error is generatod
        if(!error){
            resolve();
        }
        else{
            reject("some error occured");
        }
    },5000);
    })
    
}
// createData( {name:"XYZ",Profession:"Database admin"}).then(getDatas)
// .catch(err=>console.log(err));
// getDatas();
 async function start(){
    await createData( {name:"XYZ",Profession:"Database admin"});
    getDatas();
}
start();