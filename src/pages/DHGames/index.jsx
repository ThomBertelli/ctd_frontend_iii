import { DHGamesListComponents } from "../../components/DHGamesComponents"
import { DHGamesCardComponents } from "../../components/DHGamesComponents"
import './style.scss'

export function DHGames(){

    const newGames = [
        {
            name: 'Hollow Knight',
            plataforms: ['windows'],
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {
            name: "Don't Starve",
            plataforms: ['windows'],
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {
            name: 'Cult of the Lamb',
            plataforms: ['windows'],
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]
    
    const halloweenGames = [
        {
            name: 'Inscryption',
            categories: ['Card', 'BattlerCard', 'GameStory Rich'],
            oldPrice: '100,00',
            newPrice: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg'
        },
        {
            name: 'Hades',
            categories: ['Action', 'Roguelike', 'Indie', 'Action'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg'
        },
        {
            name: 'Darkest Dungeon',
            categories: ['Turn-BasedCombat', 'DarkFantasy', 'Roguelike'],
            oldPrice: '30,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg'
        },
        {
            name: 'Outlast',
            categories: ['Horror', 'First-Person', 'Survival Horror'],
            oldPrice: '100,00',
            newPrice: '40,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg'
        }
    ]
    
    const earlyAccessGames = [
        {
            name: 'Stardew Valleyt',
            plataforms: ['windows'],
            categories: ['Farming Sim', 'Life Sim', 'Pixel Graphics'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg'
        },
        {
            name: "Little Nightmares",
            plataforms: ['windows'],
            categories: ['Horror', 'Atmospheric', 'Adventure'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg'
        },
        {
            name: 'Bendy and the Ink Machine',
            plataforms: ['windows'],
            categories: ['Horror', 'First-Person', 'Singleplayer', 'PuzzleDark'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg'
        }
    ]
    
    const cheapGames = [
        {
            name: 'Little Misfortune',
            categories: ['Adventure', 'Point & Click', 'Indie'],
            oldPrice: '100,00',
            newPrice: '19,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg'
        },
        {
            name: 'Limbo',
            categories: ['Puzzle', 'Platformer', 'Indie'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg'
        },
        {
            name: 'Darkwood',
            categories: ['Horror', 'Survival'],
            oldPrice: '30,00',
            newPrice: '10,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg'
        },
        {
            name: 'Slender: The Arrival',
            categories: ['Horror', 'Survival Horror', 'First-Person'],
            oldPrice: '100,00',
            newPrice: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/252330/header.jpg'
        }
    ]

    return(

        <div className="dh-games">
            <header>
                <img className="logo-header" src="https://cdna.pcpartpicker.com/static/forever/images/user/4778887.b3b57e1a3c6a5aedce8dc11d83a697ab.256c.jpg" alt="" />
                <h1> Game Store </h1>
                    <nav>
                        <ul>
                            <li href="">STORE</li>
                            <li>LIBRARY</li>
                            <li>COMMUNITY</li>
                            <li>ABOUT</li>
                            <li>PROFILE</li>
                        </ul>
                    </nav>
            </header>
            <main>
                <div className="banner">
                <img src="/src/assets/images/banner.png" alt="" />
                    <div className="lettering">
                    <img className="bumpkin" src="/src/assets/images/bumpkin.png"alt="" />                        
                        <img className="bat" src="/src/assets/images/bat.png" alt="" />
                        
                        <h2 >PROMOS OU</h2>
                        <h3>DESCONTOZURAS?</h3>
                        <h4>O trocadilho é ruim mas as promoções não!</h4>
                        <h5>Aproveite as assombrosas ofertas de Halloween.</h5>

                    </div>
                </div>

            <div className="games">
                <div className="new-games">
                    <h4 className="titles-list">New Games</h4>
                    <div className="list-conteiner">
                    

                    {
                    newGames.map(
                        component => {
                            return (
                                <DHGamesListComponents key={component.name} listItems={component}/>
                            )
                        }
                    )
                }
            
                    </div>
                </div>
                


                <div className="hallowenen-offers">
                    <h4 className="titles-card">Halloween offers</h4>
                    <div className="card-container">

                    {
                    halloweenGames.map(
                        component => {
                            return (
                                <DHGamesCardComponents key={component.name} cardItems={component}/>
                            )
                        }
                    )
                }
                    </div>
                </div>

                <div className="early-access-games">
                    <h4 className="titles-list">Early Access Games</h4>
                    <div className="list-conteiner">

                    {
                    earlyAccessGames.map(
                        component => {
                            return (
                                <DHGamesListComponents key={component.name} listItems={component}/>
                            )
                        }
                    )
                }
                    </div>
                </div>

                <div className="cheap-games">
                    <h4 className="titles-card">Cheap Games</h4>
                    <div className="card-container">

                    {
                    cheapGames.map(
                        component => {
                            return (
                                <DHGamesCardComponents key={component.name} cardItems={component}/>
                            )
                        }
                    )
                }
                    </div>
                </div>
            </div>


            </main>
            <footer>
                <h3>Game Store todos direitos reservados</h3>
                <h4>Desenvolvido por: Thomas Breno Bertelli Mendes</h4>
            </footer>
        </div>
        
        
    )




}