
import './App.css';
import { useState } from "react";

function App() {



  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(true);
  const [counter1, setCounter1] = useState(90700);

  // setCounter1(counter1 - 7000)

  return (
  


<div className="App">

<h1>{switch1}</h1>

<h1>Telsa Config    </h1>
<h2>Sélectionnez votre véhicule</h2>

<button className='B1' onClick={()=>(setSwitch1(!switch1) && setSwitch1(!switch2))}style =  {{border: switch1===false?"solid blue 4.5px":"solid grey 4.5px", display: switch1===false?"none":""}}>Grande Autonomie - 90 700 €</button>
<button className='B1' onClick={()=>(setSwitch2(!switch2) && setSwitch2(switch1)) }style =  {{border: switch1===false?"solid blue 4.5px":"solid grey 4.5px", display: switch1===true?"none":""}}>Grande Autonomie - 90 700 €</button>
<button className='B2' onClick={()=>(setSwitch1(!switch1) && setSwitch1(switch1)) }style =  {{border: switch1===false?"solid grey 4.5px":"solid blue 4.5px", display: switch1===true?"none":""}}>Performance - 106 700 €</button>
<button className='B2' onClick={()=>(setSwitch2(!switch2) && setSwitch2(!switch1))}style =  {{border: switch1===false?"solid grey 4.5px":"solid blue 4.5px", display: switch1===false?"none":""}}>Performance - 106 700 €</button>
 





<h2>Sélectionnez la couleur</h2>

<button className='B3' onClick={()=>(setSwitch3(!switch3) && setSwitch3(!switch4))}style =  {{border: switch3===false?"solid blue 4.5px":"solid grey 4.5px", display: switch3===false?"none":""}}>Blanc Nacré Multicouches - 0 €</button>
<button className='B3' onClick={()=>(setSwitch4(!switch4) && setSwitch4(switch3)) }style =  {{border: switch3===false?"solid blue 4.5px":"solid grey 4.5px", display: switch3===true?"none":""}}>Blanc Nacré Multicouches - 0 €</button>
<button className='B4' onClick={()=>(setSwitch3(!switch3) && setSwitch3(switch3)) }style =  {{border: switch3===false?"solid grey 4.5px":"solid blue 4.5px", display: switch3===true?"none":""}}>Noir Uni - 1000 €</button>
<button className='B4' onClick={()=>(setSwitch4(!switch4) && setSwitch4(!switch3)) }style =  {{border: switch3===false?"solid grey 4.5px":"solid blue 4.5px", display: switch3===false?"none":""}}>Noir Uni - 1000 €</button>





<div className="Final">
<div>
<h1> 
  {/* {switch3===false?"0":"1000"} 
{switch1===false?"90700":"106700"} */}


{(switch1===false && switch3===false)?"90700":"B" && (switch1===true && switch3===false)?"106700":"D" && (switch1===true && switch3===true)?"107700":"F" && (switch1===false && switch3===true)?"100700":"H"  } 

 </h1>
</div>
<div>
  <button className="ButtonFinal"><h2>Buy !</h2></button>
</div>

</div>


</div>
  );




}

export default App;
