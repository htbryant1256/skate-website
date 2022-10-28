import './naples.css'
import { Link } from 'react-router-dom';
{/*Website Naples skate spots page*/ }


const NaplesPage = () => {
    return (
        <div className="Naples-Page">
            <div className="Naples-Page-Header">
                <div className="Naples-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>
                </div>
                <div className="Naples-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                </div>
                <div className="Naples-Page-Ft-Myers-Link">

                    <Link to="/ft-myers">Ft.Myers Page</Link>
                </div>
            </div>
            <div className="Naples-Page-Body">
                Naples Skate Spots Page.
            </div>




        </div>



    );


}

export default NaplesPage;


