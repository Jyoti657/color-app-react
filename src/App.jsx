import { useState } from 'react'

import ColorPicker from './component/Colorpicker'
import DisplayColor from './component/DisplayColor'

function App() {
  const [selectedColor,setSelectedColor] = useState("")
  

  return (
    <>
   <div className='app'>
    <h1>Favorite Color picker</h1>
   <ColorPicker onSelectColor={setSelectedColor}/>
   <DisplayColor color={selectedColor}/>
   </div>
      
    
    </>
  )
}

export default App
