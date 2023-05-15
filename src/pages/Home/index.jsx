import React from "react"

const Home = () => {

    const [contador, setcontador] = React.useState(0);

    const [darkmode, setDarkMode] = React.useState(false);

    const decrementar = () => {
        setcontador(contador - 1)
    }

    return(
        <>
           <div className={darkmode ? 'centro dark' : 'centro'}> 
                <button onClick={() => setcontador(contador + 1)}>Incrementar</button>
                <h1>Contagem: {contador}</h1>
                {/* <h1>Home</h1> */}
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={() => setcontador(0)}>Zerar</button>
           </div>
           <div onClick={() => setDarkMode (!darkmode)} className="switch">
                {darkmode ? 'Acender' : 'Apagar'} Luz 
           </div>
        </>
    )
}

export default Home;