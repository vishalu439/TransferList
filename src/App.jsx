import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [left, setleft] = useState([
    {id:1,item:"orange",checked:false},
    {id:2,item:"apple",checked:false},
    {id:3,"item":"banana",checked:false}
  ]);
  const [right, setright] = useState([
    {id:4,item:"mango",checked:false},
    {id:5,item:"papaya",checked:false}
  ]);
  const checkboxHandler=(id,value)=>{
    if(value==="left"){
      
      const newLeft=left.map((item)=>{
        if(item.id===id){
          return {...item,checked:!item.checked}
        }
        return item
      })
      setleft(newLeft)
    }
    else if(value==="right"){
      const newRight=right.map((item)=>{
          if(item.id===id){
            return {...item,checked:!item.checked}
          }
          return item
      })
      setright(newRight)
    }

  }
  const leftItems=left.map((item)=>{
    return<>
    <div className='card'>
      <p>{item.item}</p>
      <input type="checkbox" onChange={()=>checkboxHandler(item.id,"left")} checked={item.checked} />
    </div>
    </>
  })

  const rightItems=right.map((item)=>{
      return(
        <>
        <div className='card'>
          <p>{item.item}</p>
          <input type="checkbox" onChange={()=>checkboxHandler(item.id,"right")} checked={item.checked} />
        </div>
        </>
      )
  })
  const leftHandler=()=>{
    setleft([...left,...right])
    setright([])
  }

  const rightHandler=()=>{
    setright([...right,...left])
    setleft([])
  }
  const moveLeftHandler=()=>{
    const newRight=right.filter((item)=>{
        return item.checked===false
    })
    const newLeft=right.filter((item)=>{
      return item.checked===true
    })
    .map((item)=>{
      return {...item,checked:false}
    })
    setright(newRight)
    setleft([...left,...newLeft])
  }

  const moveRightHandler=()=>{
    const newLeft=left.filter((item)=>{
      return item.checked===false
  })
  const newRight=left.filter((item)=>{
    return item.checked===true
  })
  .map((item)=>{
    return {...item,checked:!item.checked}
  })
  setleft(newLeft)
  setright([...right,...newRight])
}
  
  

  return (
    <>
     <h1>transfer list</h1>
     <div className="main-container">
     <div className="container1">
        {leftItems}
     </div>
     <div className="container2">
      <button onClick={()=>leftHandler()}>{"<"}</button>
      <button onClick={rightHandler}>{">"}</button>
      <button onClick={moveLeftHandler}>{"<<"}</button>
      <button onClick={moveRightHandler}>{">>"}</button>
     </div>
     <div className="container3">
      {rightItems}
     </div>

     </div>
     
    </>
  )
}

export default App
