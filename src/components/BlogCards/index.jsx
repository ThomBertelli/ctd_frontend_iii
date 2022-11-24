

const BlogCard = (props) =>{

    console.log(props)

   const {title, body} = props.data

    return(
        <div className="card-container">            
            <img src="https://picsum.photos/400/300" alt="" />
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )




}
export  { BlogCard }