    import React from 'react'

    const Controller = ({buttonValues, onClickButton}) => {
    return (
        <div>
            {buttonValues.map((value,index)=>
        <button key={index} onClick={()=>{onClickButton(value)}}>

            {value >0 ?`+${value}`:value}
            </button>
            )}
            

        </div>
    )
    }

    export default Controller
