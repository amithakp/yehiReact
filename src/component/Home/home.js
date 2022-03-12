import React from 'react';
import './home.css';
import Header from '../header';

const Home = () => {
    return(
        <>
            <Header/>
            <div className="mainContainer">
                <div className="mainTilecontainer">
                    {/* text on main image */}
                    <div className="heading">
                        <span className="text-center"> Supply chain management and supply  engineering that plans</span> 
                        <span className="subHeading">In military science, logistics is concerned with maintaining army supply lines while disrupting those of the enemy, since an armed force without resources and transportation is defenseless. Military logistics was already practiced in the ancient world and as the modern military has a significant need for logistics solutions, advanced implementations have been developed. In military logistics, logistics officers manage how and when to move resources to the places they are needed.</span>
                    </div>
                </div>
            </div>
            {/* four icon section */}
            <div className="tileConatainerIcon col-xl-12 col-md-12 col-sm-12">
                <div className=" col-xl-12 col-md-12 col-sm-12 row">
                    <div className="column col-xl-12 col-md-12 col-sm-12">
                        <div className="icon1"></div>
                    </div>
                    <div className="column col-xl-12 col-md-12 col-sm-12">
                        <div className="icon2"></div>
                    </div>
                    <div className="column col-xl-12 col-md-12 col-sm-12">
                        <div className="icon3"></div>
                    </div>
                    <div className="column col-xl-12 col-md-12 col-sm-12">
                        <div className="icon4"></div>
                     </div>
                </div>   
            </div> 
            {/* image left deccription right coreect */ }
            <div className="media ">
                <div className="media-left">
                    {/* <div className="media-object"></div> */}
                    <img  className="media-object" src="https://i.ibb.co/Tm7st3k/Rectangle-10.png" alt="media image"/>
                </div>
                <div className="media-body">
                    <h2 className="media-heading">Formerly the officers of the general staf</h2>
                    <h5 className="mediaSubHeading">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière  
                    </h5>
                    <button className="btn btn-success">Book Now</button>
                </div>
            </div>
            {/* truck image */}
            <div className="truck">
                {/* <img src="https://i.ibb.co/9W2Zsrn/Rectangle-3-1.png"/> */}
            </div>
            <h2 className="tileHead">Loreom Ipsom</h2>
            {/* card images */}
            <div className="tileConatainerIcon col-xl-12 col-md-12 col-sm-12">
                <div className=" col-xl-12 col-md-12 col-sm-12 row" id="cardPadding">
                    <div className="card">
                        <img src="https://i.ibb.co/vs0T6tt/Rectangle-13.png"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne singulière.
                            ogistique: Ce mot me paraît être  
                        </h5>
                    </div>
                    <div className="card">
                        <img src="https://i.ibb.co/zZ9000q/Rectangle-14.png"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead">Logistique: Ce mot me paraîtil logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau,  
                        </h5>
                    </div>
                    <div className="card">
                        <img src="https://i.ibb.co/Tm7st3k/Rectangle-10.png"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead"> il paraît le faire dériver du , étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau,  
                        </h5>
                    </div>
                </div>
            </div>
            <h2 className="tileHead2">Loreom Ipsom</h2>
            <div className="tileImage">
                {   /* <img src="https://i.ibb.co/9W2Zsrn/Rectangle-3-1.png"/> */}
            </div>
            {/* second media section image left deccription right */ }
            <div className="mediaMain2">
                <div className="media2 ">
                    <div className="media-left2">
                        {/* <div className="media-object2"></div> */}
                        <img  className="media-object2" src="https://i.ibb.co/TYt2jWN/Rectangle-16.png" alt="media image"/>
                    </div>
                    <div className="media-body2">
                        <h2 className="media-heading2">Formerly the officers of the general staf</h2>
                        <h5 className="mediaSubHeading2"> dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                                ogistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière  
                        </h5>
                        <button className="btn btn-success">Book Now</button>
                    </div>
                </div>
            </div>
            {/* third media section image right deccription left */ }
            <div className="mediaMain3">
                <div className="media3">
                    <div className="media-right">
                        
                        <img  className="media-object3" src="https://i.ibb.co/NxKrTXR/Rectangle-18.png" alt="media3 image"/>
                    </div>
                    <div className="media-body3">
                        <h2 className="media-heading2"> the general staf</h2>
                        <h5 className="mediaSubHeading2">Loreum : Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                                encore vu nulle part dans la littérature il paraît le faire dériver du mot logis, étymologie singulière  
                        </h5>
                        <button className="btn btn-success">Book Now</button>
                    </div>
                </div>
            </div>
            {/* THREE BOXES section */}
            <div className="boxMain col-xl-12 col-md-12 col-sm-12">
                <div className="col-xl-12 col-md-12 col-sm-12 row">
                    <div className="boxColumn col-xl-12 col-md-6 col-sm-6">
                        <div className="box1"></div>
                    </div>
                    <div className="boxColumn col-xl-12 col-md-6 col-sm-6">
                        <div className="box2"></div>
                    </div>
                    <div className="boxColumn col-xl-12 col-md-6 col-sm-6">
                        <div className="box3"></div>
                    </div>
                </div>   
            </div> 
            <div className="city">
                {   /* <img src="https://i.ibb.co/9W2Zsrn/Rectangle-3-1.png"/> */}
            </div>
            <h2 className="helped">How we have helped industries</h2>
            <div className="helpBox col-xl-12 col-md-12 col-sm-12">
                <div className="col-xl-12 col-md-12 col-sm-12 row">
                    <div className="helpColumn col-xl-12 col-md-6 col-sm-6">
                        <div className="helpBox1"></div>
                        <div className="helpBoxName1">Automotive & industrial</div>
                    </div>
                    <div className="helpColumn col-xl-12 col-md-6 col-sm-6">
                        <div className="helpBox2"></div>
                        <div className="helpBoxName2">Chemical & Agriculture</div>
                    </div>
                    <div className="helpColumn col-xl-12 col-md-6 col-sm-6">
                        <div className="helpBox3"></div>
                        <div className="helpBoxName3">Healthcare</div>
                    </div>
                </div>
            </div>
            {/* image left deccription right coreect */ }
            <div className="media ">
                <div className="media-left">
                    {/* <div className="media-object"></div> */}
                    <img  className="media-object" src="https://i.ibb.co/Tm7st3k/Rectangle-10.png" alt="media image"/>
                </div>
                <div className="media-body">
                    <h2 className="media-heading">Formerly the officers of the general staf</h2>
                    <h5 className="mediaSubHeading">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière  
                    </h5>
                    <button className="btn btn-success">Book Now</button>
                </div>
            </div> 
        </>
    )
}
export default Home