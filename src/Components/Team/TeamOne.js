import React from 'react';
import SectionTitleOne from '../SectionTitleOne';
import { Link } from 'react-router-dom';

const TeamOne = (props) => {
    const TeamData = props.TeamData;

    return (
        <section className="doctors-wrapper section-padding">
            <div className="container">
                <SectionTitleOne BigTitle="Our Dentists" />
                <div className="row text-center">
                    {TeamData.doctors.slice(0, 3).map((member) => (
                        <div className="col-md-6 col-lg-4 col-12" key={member.id}>
                            <div className="single-doctor">
                                <div className="doctor-profile">
                                    <img src={require("../../assets/img/" + member.imgUrl)} alt="" />
                                </div>
                                <div className="doctor-info">
                                    <h3><Link to={member.link}>{member.name}</Link></h3>
                                    <span>{member.position}</span>
                                </div>
                                <div className="doctor-social-icons">
                                    {member.socialIcon.map((social) => (
                                        <a href={social.url} key={social.id}><i className={social.icon} /></a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12 text-center mt-45">
                        <Link to='/Page/Team' className="btn-link doctor-btn-link">View All Dentists</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamOne;