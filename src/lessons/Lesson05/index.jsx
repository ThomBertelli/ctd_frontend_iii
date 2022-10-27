import './style.scss'
import reactLogo from './../../assets/images/gifReact.gif'
import jsLogo from './../../assets/images/js.gif'
import cssGif from './../../assets/images/css.gif'
import { QuintaAulaComponent } from '../../assets/components/Lesson5Components'

export function QuintaAula() {

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
                                <QuintaAulaComponent key={component.id} item={component}/>
                            )
                        }
                    )
                }

            </ul>

        </div>
    )

}