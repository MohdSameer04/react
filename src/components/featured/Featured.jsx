import React from "react";
import "./Featured.scss";

function Featured() {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">

                    {/* create a website front page in which background color is green and right side is image present */}
                    <h1>
                        Find the perfect <span>freelance</span> services for your business
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder='Try "building mobil app"' />
                        </div>
                        <button>Search</button>
                    </div>

                    {/* after search button some buttons are present */}
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>

                {/* on right hand of the website the image is present so with the help of this a image is present */}
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured;