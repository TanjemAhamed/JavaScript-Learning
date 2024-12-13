/**
 * description: Asynchronous and Synchronous code execution
 */
console.log("Start of ClassPractice.js");

let cDate = Date.now();
while (Date.now() - cDate < 1000) {
  // Wait for 5 seconds
}

console.log("End of ClassPractice.js");

// Asynchronous code execution

console.log("\n\nStart of ClassPractice.js");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);
console.log("End of ClassPractice.js");

console.log("\n\nAsync Without using Callback");

function fetchData() {
  setTimeout(() => {
    return "Data Fetched";
  }, 1000);
}

let result = fetchData();
console.log(result);

console.log("\n\nCallBack");
// Using callback
function fetchDataUsingCallback(callback) {
  setTimeout(() => {
    let jesonResult = { Id: 1, Name: "Aryan" };
    callback(jesonResult);
  }, 1000);
}

fetchDataUsingCallback((jesonResult) => {
  console.log(jesonResult.Name);
});

console.log("\n\nError Handling in Callback");

function fetchDataUsingCallback(result, errorHandle) {
  setTimeout(() => {
    let isSucess = true;
    if (isSucess) {
      let jesonResult = { Id: 1, Name: "Aryan" };
      result(jesonResult);
    } else {
      errorHandle("Error");
    }
  }, 1000);
}

fetchDataUsingCallback(
  function (jesonResult) {
    console.log(jesonResult);
  },

  function (error) {
    console.log(error);
  }
);
