import { useEffect, useState } from 'react'
import { BlogCard } from '../../components/BlogCards'
import { BlogLayout } from '../../components/BlogLayout'

import "./style.scss"

const Blog = () => {

    const [posts, setPosts] = useState([{}
        




    ])

    

    function getPosts() {




       fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
        .then((response) => response.json())
        .then((postArray) =>setPosts(postArray))                 
        
    }



   useEffect(()=>{

    getPosts()
   },[])





    return (
        <div >
            <BlogLayout />

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


export { Blog }