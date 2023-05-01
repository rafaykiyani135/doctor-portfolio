import React from 'react';

const SectionTitleOne = ({ BigTitle }) => {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <div className="section-title-one">
          <h1>{BigTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleOne;