// Callback's sweeter practice = Promise

function fetchData() {
    let pms = new Promise((successResolver, errorHandler) => {
       setTimeout(() => {
          let isSucess = true;
          if (isSucess) {
             let jesonResult = { Id: 1, Name: "Aryan" };
             successResolver(jesonResult);
          } else {
             errorHandler("Error");
          }
       }, 1000);
    });
    return pms;
}

fetchData().then((person) => {
    console.log(person.Name + " " + person.Id);
}).catch((error) => {
    console.log(error);
});