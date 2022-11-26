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
                    <Link to=''><li>HOME</li></Link>
                    <Link><li>ABOUT</li></Link>
                    <Link><li>CONTACT</li></Link>
                </ul>
            </nav>

            <div className='main-content' >
                <Outlet />
                
            </div>

            <footer>
                
            </footer>


        </div>




    )


}

export { BlogLayout }

