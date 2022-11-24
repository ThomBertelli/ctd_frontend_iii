export function DHGamesListComponents(props){

  
    let categoriesString = props.listItems.categories.toString()
    let plataformsString  = props.listItems.plataforms.toString()
   
   


    return(
        <div className="list">
            <div className="list-image">
                <img src={props.listItems.picture}/>
            </div>
            <div className="list-text">
                <h3>{props.listItems.name}</h3>
                <p>{plataformsString}</p>
                <p className="catefories">{categoriesString}</p>                
                <h4>R$ {props.listItems.price}</h4>
            </div>
            
        </div>


    )
}

export function DHGamesCardComponents(props){

    let categoriesString = props.cardItems.categories.toString()

    return(
        <div className="card-game">
            <div className="card-image">
                <img src={props.cardItems.picture}/>   
            </div>
            
            <div className="card-text">
                <h2>{props.cardItems.name}</h2>
                <h3>{categoriesString}</h3>
            </div>
            <div className="card-price">
                <h5>{props.cardItems.oldPrice}</h5>
                <h2>{props.cardItems.newPrice}</h2>
            </div>
                

            
            
        </div>
    )

    

}