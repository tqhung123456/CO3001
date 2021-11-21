import React from 'react'

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btns">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;
