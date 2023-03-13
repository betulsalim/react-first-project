import axios from "axios";

async function getData(Number){
  try{
 
  async function userId(Number){
  const {data : users} = await axios (
    "https://jsonplaceholder.typicode.com/users/" +Number
  );
  console.log(users);
  }

  async function postId(Number){

  
  const {data : posts}= await axios (
    "https://jsonplaceholder.typicode.com/posts?id"+Number
  );
    console.log(posts);
  }  
  const usersId = await userId(Number);
  const postsId = await postId(Number);

  return usersId+postsId;
}
catch(e){
  console.log(e);
}
}




export default getData;