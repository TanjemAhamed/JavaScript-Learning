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

async function getData() {
  try {
    let result = await fetchData();
    console.log(result.Name + " " + result.Id);
  } catch (error) {
    console.log(error);
  }
}

getData();
