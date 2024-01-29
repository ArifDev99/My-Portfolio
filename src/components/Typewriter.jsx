import { useEffect, useState } from "react"



export default function Typewriter({headerTag}) {

    const [index,setIndex]=useState(0)
    const [currText,setCurrText]=useState(headerTag[index])


    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex(index + 1);
            if (index === headerTag.length) {
                setIndex(0)
                clearInterval(interval);
                // setCurrText(headerTag[index])
            }
            setCurrText(headerTag[index]);
        }, 1000);
        return ()=> clearInterval(interval);
    },[index,currText])
  return (
    <span className="text-yellow-400">{currText}</span>
  )
}
