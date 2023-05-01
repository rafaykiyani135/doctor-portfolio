import React, { useState } from 'react';

const Appointment = () => {

  const [appointmentInfo, setAppointmentInfo] = useState({
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    subject: 'Subject',
    message: 'Message'
  });

  const myChangeName = (event) => {
    setAppointmentInfo({
      ...appointmentInfo,
      name: event.target.value
    });
  }

  const myChangeEmail = (event) => {
    setAppointmentInfo({
      ...appointmentInfo,
      email: event.target.value
    });
  }

  const myChangePhone = (event) => {
    setAppointmentInfo({
      ...appointmentInfo,
      phone: event.target.value
    });
  }

  const myChangeSubject = (event) => {
    setAppointmentInfo({
      ...appointmentInfo,
      subject: event.target.value
    });
  }

  const myChangeMessage = (event) => {
    setAppointmentInfo({
      ...appointmentInfo,
      message: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  return (
    <section className="appointment-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <div className="section-title-one">
              <h1>Request Appointment</h1>
            </div>
            <div className="appointment-form">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type='text'
                    value={appointmentInfo.name}
                    onChange={myChangeName}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type='email'
                    value={appointmentInfo.email}
                    onChange={myChangeEmail}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type='text'
                    value={appointmentInfo.phone}
                    onChange={myChangePhone}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type='text'
                    value={appointmentInfo.subject}
                    onChange={myChangeSubject}
                  />
                </div>
                <div className="col-lg-12 col-12">
                  <textarea
                    value={appointmentInfo.message}
                    onChange={myChangeMessage}
                  />
                </div>
                <button className="submit-btn" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment-right-banner">
        <img src={require("../assets/img/appointment.png")} alt="donto" />
      </div>
    </section>
  )
}

export default Appointment;