export function Lesson05Component (props){

        return(

        <li>
            <img src={props.item.image} />
            <h1>{props.item.title}</h1>
            <p>{props.item.text}</p>
        </li>

    )


    


}