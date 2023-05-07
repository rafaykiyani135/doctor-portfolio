import ReactPlayer from "react-player";

function Review(){

    return(
        <div>
           <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingBottom:"75px"}}>
                <h1 className="heading-class" style={{fontSize:"50px"}}>
                Esperienza dei clienti
                </h1>
            </div>
            
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="player-wrapper">
                        <ReactPlayer className="react-player" height="100%" width="100%" url="https://www.youtube.com/watch?v=fQhSlHT7m-o"/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="player-wrapper">
                        <ReactPlayer className="react-player" height="100%" width="100%" url="https://www.youtube.com/watch?v=SpFOmfTocU4"/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="player-wrapper">
                        <ReactPlayer className="react-player" height="100%" width="100%" url="https://www.youtube.com/watch?v=8XBO18hmlg0"/>
                        </div>
                    </div>
                  
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="player-wrapper">
                        <ReactPlayer className="react-player" height="100%" width="100%" url="https://www.youtube.com/watch?v=Qm7FkhuBthg"/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="row" style={{paddingBottom:"75px"}}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="player-wrapper">
                        <ReactPlayer className="react-player" height="100%" width="100%" url="https://www.youtube.com/watch?v=r8ZdnBsJwm0"/>
                        </div>
                    </div>
                  
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="player-wrapper">
                        <ReactPlayer className="react-player" height="100%" width="100%" url="https://www.youtube.com/watch?v=h3tBl5754Zk"/>
                        </div>
                    </div>
                </div>


           </div>
        </div>
    );
}

export default Review;