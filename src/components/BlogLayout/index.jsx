import './style.scss'
import { Link, Outlet } from 'react-router-dom'


const BlogLayout = () => {

    return (
        <div className="blog-layout-main">
            <header>
                <h1>MY BLOG</h1>
            </header>


            <nav className="blog-layout-nav">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>

            <div className='main-content'>
                <Outlet />
                
            </div>


        </div>




    )


}

export { BlogLayout }

