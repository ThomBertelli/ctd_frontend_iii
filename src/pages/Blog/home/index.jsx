
import { useState, useEffect } from 'react'
import { BlogCard } from '../../../components/BlogCards'
import './style.scss'

const Home = () => {


    const [posts, setPosts] = useState([])



    function getPosts() {




        fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
            .then((response) => response.json())
            .then((postArray) => setPosts(postArray))

    }



    useEffect(() => {

        getPosts()
    }, [])





    return (
        <div >
            <div className='content-container'>

                <div className='cards'>

                    {

                        posts.map(
                            (posts, index) => (
                                <BlogCard
                                    key={index}
                                    data={posts}


                                />
                            )
                        )

                    }

                </div>
            </div>
        </div>
    )



}

export { Home }