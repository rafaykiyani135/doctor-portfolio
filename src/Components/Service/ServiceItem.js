import React from 'react';

const ServiceItem = ({ ServiceData }) => {
    return (
        <>
            {ServiceData.serviceItem.map(item => (
                <div className="col-md-6 col-12 col-lg-6 col-xl-4" key={item.id}>
                    <div className="single-service-box">
                        <div className="service-icon">
                            <img src={require(`../../assets/img/icons/${item.imgUrl}`).default} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <a href={item.link} className="btn-link">read more</a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ServiceItem;