//flexbox


//sync means sequence- line by line

//asyn - callback - set time out - function and time (milisec)

// function add(){
//     console.log("hello world");
// }

// // console.log(add(4,9));

// setTimeout(add,5000);
// console.log("hello");


//promise
//  let promise = new Promise(function(resolve,reject){


//      if(6>2){
//          resolve("resolved")
//      }
//      else{
//          reject("reject")
//      }
//  });

//  //invoke or call we use .then and .catch

//  promise.then(function(res){
//      console.log(res);
//  })

//  promise.catch(function(rej){
//      console.log(rej);
//  })

//promise through api

// import axios from "axios";

//         function fetchProducts() {
  
//           axios.get("https://fakestoreapi.com/products")

//             .then(function(res) {
//               console.log(res);
//             })
//             .catch(function(err){console.log("err");
//         })
//     }

//fetch

fetch("https://fakestoreapi.com/products")

//call the promise

.then(function(res) {
    console.log(res);
})
.catch(function(rej){
    console.log("reject");
})


