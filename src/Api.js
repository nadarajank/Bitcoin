import React,{useState,useHistory, useEffect} from 'react';
import axios from 'axios';
const Api = () =>{
    const [post,setPost] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(res=>{
         console.log(res);
         setPost(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[] ) //ithula array podatti crash agirum
    return(
       <div className = "aping">
           <ul>
               {
                   post.map(posts => <li key = {posts.id}>{posts.title}</li>)
               }
           </ul>
       </div>
    );
}
export default Api;