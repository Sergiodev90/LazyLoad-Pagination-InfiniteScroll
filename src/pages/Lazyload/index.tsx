import { useState } from 'react';
import './Lazyloader.css'

function LazyloadPage():JSX.Element{
    const [click,setClick] = useState<boolean>(false)
    const handleClick= ():void=>{
        setClick(true)
    }
    return(
        <>
        {!click &&  <div className="LazyloaderContainer"> 
            Generate Random Images To see:
        </div>}
        {!click && <button onClick={handleClick}>Start</button>}
        {

        }
        </>
    );
}

export default LazyloadPage;