fetch("https://randomuser.me/api/?results=2")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return console.log(data);
  })
  .catch((error) => {
    return console.log(error);
  });

async function Loade() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=2");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

console.log(Loade());
