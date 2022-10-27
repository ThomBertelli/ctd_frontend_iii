import './style.scss'
import reactLogo from './../../assets/images/gifReact.gif'
import jsLogo from './../../assets/images/js.gif'
import cssGif from './../../assets/images/css.gif'
import { Lesson05Component } from '../../assets/components/Lesson05Components'

export function Lesson05() {

    const componentsFinded = [
        {
            id: 1,
            title: 'React Logo',
            image: reactLogo,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        },
        {
            id: 2,
            title: 'JavaScript',
            image: jsLogo,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        },
        {
            id: 3,
            title: 'CSS',
            image: cssGif,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        }
    ]

    return (
        <div className='quinta-aula-component'>

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return (
                                <Lesson05Component key={component.id} item={component}/>
                            )
                        }
                    )
                }

            </ul>

        </div>
    )

}