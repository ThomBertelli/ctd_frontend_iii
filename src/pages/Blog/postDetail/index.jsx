import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BlogPostDetail } from "../../../components/BlogPostDetail/BlogPostDetail"

const PostDetail = () =>{
    const [post, setPost]= useState([])
    
    const {id} = useParams()

    function getPost(id) {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((postData) => setPost([postData]))



    }

    useEffect(() => {

        getPost(id)
    }, [])
    
    
    
    return(
        <div className="post-container">

            

        {
            post.map(
                (data, index) => (
                    <BlogPostDetail
                        key={index}
                        data={data}
                        
                    />
                    
                )
            )


        }


        </div>



    )



}

export { PostDetail } 