import React from "react"; 
import './style.css'

const Accordion = () => {

    const [active, setActive] = React.useState(false);
    return (
        <>
           <div className={active ? 'accordion active' : 'accordion'} onClick={() => setActive(!active)}>
                <h3>Titulo Sanfona</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum id aliquam, adipisci voluptatibus odio commodi. Omnis vero quod eius quibusdam! Autem impedit excepturi minima sunt voluptatibus aspernatur eum, tempore enim.</p>
           </div> 
        </>
    );
}

export default Accordion;