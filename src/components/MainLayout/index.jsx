import { Link, Outlet } from 'react-router-dom'
import { useBigText } from '../../hooks/useBigText'
import { useHighContrast } from '../../hooks/useHighContrast'
import { useTheme } from '../../hooks/useTheme'
import './style.scss'

export const MainLayout = () => {

    const { theme } = useTheme()
    const { bigText} = useBigText()
    const { highContrast} = useHighContrast()
     


    return (
        <div className={`main-container ${theme} ${bigText} ${highContrast} `}>

            <header className='main-layout--header'>

                <h1> Aulas Frot End III</h1>

            </header>




            <main className='main-layout--main'>

                <nav className='main-layout--menu'>
                   
                   
                    <ul>
                        <h3>📕Aulas</h3>
                        <li><Link to="/lesson02">📖 Lesson 2</Link></li>
                        <li><Link to="/lesson03">📖 Lesson 3</Link></li>
                        <li><Link to="/lesson05">📖 Lesson 5</Link></li>
                        <li><Link to="/lesson08">📖 Lesson 8</Link></li>
                        <li><Link to="/lesson13">📖 Lesson 13</Link></li>
                        <li><Link to="/lesson15">📖 Lesson 15</Link></li>
                        <li><Link to="/dhgames">🎮 DH games</Link></li>
                        <li><Link to="/login">🖥️ Login</Link></li>
                        <h3>⚙️Opções</h3>
                        <li><Link to="/configs">🪛 Configurações</Link></li>
                    </ul>
                    

                </nav>

                <div className='main-content'>
                    <Outlet />
                </div>

            </main>


        </div>





    )



}
