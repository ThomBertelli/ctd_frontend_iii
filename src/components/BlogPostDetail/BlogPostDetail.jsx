import { useState, useEffect } from 'react'
import { BlogComments } from '../BlogComments'
import './style.scss'


const BlogPostDetail = (props) => {

    const [comments, setComments] = useState([])

    console.log(comments)

    const { id, title, body } = props.data


    function getComments(id) {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((data) => setComments(data))



    }

    useEffect(() => {

        getComments(id)
    }, [])





    return (
        <div className='post-detail-container'>
            <div className='post-detail-content'>
                <img src="https://picsum.photos/800/600" alt="" />

                <div className='post-text'>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>

                <div className='commets'>
                    <h3>{comments.length} Comments</h3>
                    {
                        comments.map(
                            (data, index) => (
                                <BlogComments
                                    key={index}
                                    data={data}
                                    className='post-comments-container'

                                />

                            )
                        )

                    }
                </div>

            </div>







        </div>




    )


}

export { BlogPostDetail }