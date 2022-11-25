import "./style.scss"

import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const BlogCard = (props) => {

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function goToDetails() {




    }



    let d = randomDate(new Date(2012, 0, 1), new Date());

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    const { title, body } = props.data



    return (
        <div className="card-container" onClick={goToDetails()}>
            <img src="https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2F6a204d6b-0fe4-45c8-a63e-b2e09c11de32%2Fa13648d5-c0b9-4ded-8ecd-89aad8634e6c%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc" alt="" />
            <div className="card-text">
                <small>{d.toLocaleDateString("pt-BR", options)}</small>
                <h3>{title}</h3>
                <p>{body}</p>

            </div>

            <div className="card-icons">

                <p ><FacebookIcon /> <InstagramIcon /> <PinterestIcon /></p>
            </div>


        </div>
    )




}
export { BlogCard }