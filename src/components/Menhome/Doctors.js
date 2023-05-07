import { Link } from "react-router-dom";
function Doctor(props){
    return(
        <div className="row team-active team-area2 fix p-relative pt-105 pb-80">
        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={props.image} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">{props.name}</Link>
                                    </h4>
                                    <p>{props.profession}</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
    )
}

export default Doctor;