let myRequest = fetch("https://fakestoreapi.com/carts")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    return myData;
  })
  .then((myData) => {
    myData.length = 5;
    console.log(myData);
    return myData;
 
  }).then( (data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*  Promise Status :
    1- Fulfilled : successful operation 
    2- Rejected :failed operation
    3- Pending : initial state, neither fulfilled nor rejected.  
 */
