import React from 'react';
import { Link } from 'react-router-dom';

const Dentist = ({ TeamData }) => {
  return (
    <>
      {TeamData.doctors.map((member) => (
        <div className="col-md-6 col-lg-4 col-12" key={member.id}>
          <div className="single-doctor">
            <div className="doctor-profile">
              <img src={require(`../../assets/img/${member.imgUrl}`).default} alt="" />
            </div>
            <div className="doctor-info">
              <h3>
                <Link to={member.link}>{member.name}</Link>
              </h3>
              <span>{member.position}</span>
            </div>
            <div className="doctor-social-icons">
              {member.socialIcon.map((social) => (
                <a href={social.url} key={social.id}>
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Dentist;