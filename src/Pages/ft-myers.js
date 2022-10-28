import './ft-myers.css'
import { Link } from 'react-router-dom';


const FtMyersPage = () => {
    return (
        <div className="Ft-Myers-Page">
            <div className="Ft-Myers-Page-Header">
                <div className="Ft-Myers-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>
                </div>
                <div className="Ft-Myers-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                </div>
                <div className="Ft-Myers-Page-Ft-Myers-Link">

                    <Link to="/ftMyers">Ft.Myers Page</Link>
                </div>
            </div>
            <div className="Ft-Myers-Page-Body">
                Ft.Myers Skate Spots Page.
            </div>




        </div>



    );


}

export default FtMyersPage;


