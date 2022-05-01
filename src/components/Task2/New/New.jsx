import React,{useState} from 'react'
import './New.css'

function New(props) {

    const [stock,setStock]=useState(
        {
            itemsno:"",
            itemname:"",
            price:""
        }
    )
    function handle(e){
        const ndata = {...stock}
        ndata[e.target.id] = e.target.value
        setStock(ndata)
        console.log(ndata)
    }
    

  return (
    <div>
        <div className="book bg-dark p-5 rounded">
            <h1 className='text-center text-info'>{props.data} STOCK</h1>
            <form className='new-form text-info ' action="" autoComplete='off' onSubmit={()=>alert(JSON.stringify(stock)+"\n"+props.data+" SUCCESSFULLY")}>
                <table>
                    <tr>
                        <td><label className='my-auto' htmlFor="">ITEM SNO:</label></td>
                        <td><input onChange={(e)=>handle(e)} required=" " type="text" name="" id="itemsno" /></td>
                    </tr>
                    {props.data==="DELETE"?null:
                    [<tr>
                        <td><label className='my-auto' htmlFor="">ITEM NAME:</label></td>
                        <td><input onChange={(e)=>handle(e)} required=" " type="text" name="" id="itemname" /></td>
                    </tr>,
                    <tr>
                        <td><label className='my-auto' htmlFor="">PRICE:</label></td>
                        <td><input onChange={(e)=>handle(e)} required=" " type="number" name="" id="price" /></td>
                    </tr>]}
                    <tr>
                        <td></td>
                        <td><input  className='btn btn-info col-12' type="submit" value={props.data} /></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
  )
}

export default New