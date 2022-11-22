const dataAneh = {
  statusCode: 200,
  listing: [
    {
      id: 1,
      name: "budi",
      hobbies: {
        day: "monday",
        activity: "running",
        location: "sport hall",
      },
    },
    {
      id: 2,
      name: "ahmad",
      hobbies: {
        day: "monday",
        activity: "swimming",
        location: "empang",
      },
    },
  ],
};

function getData(param) {
  const filterData = param.listing.filter((item) => {
    return item.name == "ahmad";
  });

  let array = [];
  filterData.map((item) => {
    for (let key in item.hobbies) {
      array.push(item.hobbies[key]);
    }
  });

  return array;
}

console.log(getData(dataAneh));
