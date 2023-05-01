import React from 'react';

const RecentPost = ({ BlogData }) => {
    return (
        <>
            {BlogData.postItem.map((item, index) => {
                return (
                    index < 2 ?
                        <div className="col-md-6 col-lg-6 col-sm-12" key={item.id}>
                            <div className="single-blog-card">
                                <div className="featured-thumb">
                                    <img src={require("../../assets/img/blog/" + item.imgUrl).default} alt="" />
                                </div>
                                <div className="card-content">
                                    <h3><a href={item.link}>{item.title}</a></h3>
                                    <div className="card-meta">
                                        <div className="col-6">
                                            <span>Post by: {item.author}</span>
                                        </div>
                                        <div className="col-6">
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                );
            })}
        </>
    );
};

export default RecentPost;