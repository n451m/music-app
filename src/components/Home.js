import {useState} from 'react';

const Home = () => {
      const[name,setName] = useState('User')
     
       
      const handleClick = () => {
        setName('jones') 
    
    }

    return(
        <div className="home">
              <h2>HomePage</h2>
               <p> Wecome {name}</p>
            
              <button onClick={handleClick} style={{
                        color:"white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px"}}> 
                    click me </button>
        </div>
    )

}

export default Home