import "./style.scss"

import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";



const BlogCard = (props) => {

    
    let d = randomDate(new Date(2012, 0, 1), new Date());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const { title, body, id } = props.data

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    return (
        <Link className="card-container" to={`post/${id}`} >
            <div className="card-text">
                <small>{d.toLocaleDateString("pt-BR", options)}</small>
                <h3>{title}</h3>
                <p>{body}</p>

            </div>

            <div className="card-icons">

                <p ><FacebookIcon /> <InstagramIcon /> <PinterestIcon /></p>
            </div>


        </Link>
    )




}
export { BlogCard }