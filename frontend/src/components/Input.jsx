import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref) {
    const id = useId()
    return (
      <div>
           {label && <label 
            style={{display:"inline-block", marginBottom:"1em", paddingLeft:"1em", paddingRight:"1em", whiteSpace:"none", width:"4em", fontSize:"1em"}}    // inline-block mb-1 pl-1 
            htmlFor={id}>
                {label}
            </label>}
            <input
            className={` ${className}`}
            style={{width:"245px", height:"35px", fontSize:"1em", marginBottom: "1em"}}
            ref={ref}
            {...props}
            id={id}
            />
      </div>
    )
  })


export default Input