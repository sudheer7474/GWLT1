import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


 const App = () => {
   const [koo,setKoo]=useState([]);
   useEffect(()=>{
     axios.get(" https://gorest.co.in/public/v1/posts")
     .then(res=> {console.log(res)
      setKoo(res.data.data)})
      .catch(err=>{console.log(err)})

   },[]);


  return (
    <div>
      <div class="container">
  

      <center>
            <h1  class="text-primary">KOO APP</h1>
                   {
                      koo.map((e,v)=>(
                        <div class="container">
                          <div class="card m-5">
                             <div class="card-body shadow-lg">
                                 <h1 key={v}>{e.id}</h1>
                                 <h4 class="card-title ">{e.title}</h4>
                                 <p class="card-text">{e.body}</p>
                              </div>
                            </div>
                        </div>
                        
                         ))
                     }
    
        </center>
        </div>
    </div>
  )
  }
export default App;