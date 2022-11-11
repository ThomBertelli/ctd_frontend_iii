import { useEffect } from "react"
import { useState } from "react"


export function Lesson13(){
    const [foodName, setFoodName] = useState('Pizzas')

    useEffect(()=>{
        setTimeout(()=>{
        
            console.log('O componente foi atualizado')
        },2000)
        

    },[foodName]) 

    function cancelOrder(){

        alert("Seu pedido foi cancelado!")
        setFoodName('')
        
    }

    return(

        <div>
            <h1>Seu pedido:{foodName} </h1>
            <button onClick={cancelOrder}> Cancelar Pedido</button>
        </div>     

    )






}