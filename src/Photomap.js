import React from 'react'

const Photomap = () => {
    const all=[
        {name: "Naruto", 
        img:"https://p325k7wa.twic.pics/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg?twic=v1/cover=760x844/step=10/quality=80" 
       } 
        ,{
            name:"naroto 2",
            img:"http://vignette3.wikia.nocookie.net/vsbattles/images/a/a7/Naruto_with_Asura_power.png/revision/latest?cb=20140510080148"
        }
    ]      
  return (
    <div>
      {all.map((el,i)=>(
         <div className='nar' key={i}>
             
             <img className='mgg' src={el.img} alt="tel9a el 3asba"/>
        </div>
      ))}
    </div>
    )
      } 
    export default Photomap;
