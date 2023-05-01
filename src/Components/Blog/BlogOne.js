import React from 'react';
import SectionTitleOne from '../SectionTitleOne';

function BlogOne(props) {
  const { BlogData } = props;

  return (
    <section className="blog-wrapper blog-one section-padding pt-0">
      <div className="container">
        <SectionTitleOne BigTitle="Latest Blog" />
        <div className="row">
          {BlogData.postItem.slice(0, 3).map((item) => (
            <div
              className="col-md-6 col-lg-6 col-xl-4 col-sm-12"
              key={item.id}
            >
              <div className="single-blog-card">
                <div className="featured-thumb">
                  <img
                    src={require(`../../assets/img/blog/${item.imgUrl}`).default}
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <h3>
                    <a href={item.link}>{item.title}</a>
                  </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogOne;