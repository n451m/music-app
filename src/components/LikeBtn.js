import React, {useState} from "react";

function Ratings (){
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState (0);
    
    return (
    <>
     <div className="btns">
       <div className="displayLikes"> 
          <button onClick={() => setLike(like + 1)}>🔥</button>
          <h2>{like}</h2> 
       </div>
       <div className="displayDislikes">  
          <button onClick= {() => setDislike(dislike - 1)}>💩</button>
          <h2>{dislike}</h2> 
       </div>

       </div>
    </>
           
    )


}

export default Ratings