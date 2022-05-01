import React,{useState} from 'react'
import './Task1.css'
function Task1() {
    const [string,setString] = useState('')

    const frequencyOfCharacter=()=>{
        
        let object = {}

        for(let i=0;i<string.length;i++){
            if (object[string[i]] === undefined) {
                object[string[i]]=1
            } else {
                object[string[i]]+=1
            } 
        }
        alert(JSON.stringify(object))
    }
    

  return (
    <div>
        <u className='text-info'><h1 className=' text-info font-weight-bold pt-5'>TASK1</h1></u>
        <div className="container">
            <div className="task1-form bg-dark rounded">
                <form onSubmit={frequencyOfCharacter} autoComplete='off' action="">
                    <input className=' border rounded border-info' onChange= {(e) => setString(e.target.value)} value= {string} type="text" name='string'   required=" " placeholder="Enter a String..."  />
                    <input className='mt-4 task1-btn btn btn-info font-weight-bold' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Task1