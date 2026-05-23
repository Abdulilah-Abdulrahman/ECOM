import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error , setError]=useState()
   useEffect(()=>{
   axios
     .get(" https://jsonplaceholder.typicode.com/posts")
     .then((response) => {
      setPosts(response.data);
     })

     .catch((err) => {
       setError("Failed to fetch data");
      
     });
  
   },[])
   
    if (error) return <h1>{error}</h1>;
  return (
    
    <div>
  
      <h1>HELLO</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}




export default App