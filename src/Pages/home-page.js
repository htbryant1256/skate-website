import './home-page.css'
import { Link } from 'react-router-dom';
{/*Website Home Page*/ }

const HomePage = () =>{
    return (
        <div className="Home-Page">
            <div className="Home-Page-Header">
                <div className="Home-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>
                </div>
                <div className="Home-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                </div>
                <div className="Home-Page-Ft-Myers-Link">

                    <Link to="/ft-myers">Ft.Myers Page</Link>
                </div>
                
            </div>
            <div className="Home-Page-Body">
                Home Page.
            </div>
            
            
            
            
        </div>
        
        
        
        );


}

export default HomePage;


