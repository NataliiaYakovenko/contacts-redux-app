import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts=()=>axiosInstance.get("/posts")



// const axiosInstance = axios.create({ baseURL: "https://randomuser.me/api" });

// axiosInstance
//   .get("/?results=100")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// axiosInstance
//   .get("/?gender=female")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//-----------------------------------------------------------------------
// axios
//   .get("https://randomuser.me/api/?results=2")
//   .then((data) => console.log(data))
//   .catch(error=>console.log(error))

// async function loadUsers(){
//     try{
//       const data = await  axios.get("https://randomuser.me/api/?results=2")
//       console.log(data);
//     }
//     catch(error){
//     console.log(error);
//     }
// }

// loadUsers()
