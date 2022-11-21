import './baker-park.css'
import React from "react";

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const BakerParkPage = () => {


    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.naples_locations));
    }, []);

    return (
        <div className="baker-park-Page">
            <div className="baker-park-Page-Header">
                <div className="baker-park-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>
                </div>
            </div>
            <div className="baker-park-Page-Column">

                <div className="baker-park-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                </div>
                <div className="baker-park-Page-Ft-Myers-Link">

                    <Link to="/ft-myers">Ft.Myers Page</Link>
                </div>



            </div>


            <div className="baker-park-Page-Body">
                Baker Park Test Page
                <div className="baker-park-Location-List">
                    <p>{!data ? "loading..." : data[0]}</p>
                    <p>{!data ? "loading..." : data[1]}</p>
         

                </div>


            </div>




        </div>



    );


}

export default BakerParkPage;


