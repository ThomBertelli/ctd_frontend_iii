export function DHGamesListComponents(props){

  
    let categoriesString = props.listItems.categories.toString()
    let plataformsString  = props.listItems.plataforms.toString()
   
    console.log(props.listItems.categories.toString())
   


    return(
        <li>
            <img src={props.listItems.picture}/>
            <p>{props.listItems.name}</p>
            <p>{categoriesString}</p>
            <p>{plataformsString}</p>
            <p>{props.listItems.price}</p>
        </li>


    )
}

export function DHGamesCardComponents(props){

    let categoriesString = props.cardItems.categories.toString()

    return(
        <li>
            <img src={props.cardItems.picture}/>
            <p>{props.cardItems.name}</p>
            <p>{categoriesString}</p>
            <p>{props.cardItems.oldPrice}</p>
            <p>{props.cardItems.newPrice}</p>
        </li>
    )

    

}