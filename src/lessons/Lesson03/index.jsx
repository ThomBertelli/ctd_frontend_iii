import './style.scss'
import gifReact from './../../assets/images/gifReact.gif'

export function Lesson03(){

    const title = "Teste"

    const components = [
        {name: 'Component Card', description: 'test', image: 'https://campuscode-site.s3.sa-east-1.amazonaws.com/newsletter/react_black.gif' }
    ]

    return(

        <main className='lesson03-main'>
            <div>
                <h1>Lista de componentes:</h1>
                <img src={gifReact}/>                
                <ul>
                    <li>
                        <img src={components[0].image }/>
                        <h1>{title}</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem incidunt amet?</p>
                    </li>
                </ul>
        


            </div>
            

        </main>


    )



}