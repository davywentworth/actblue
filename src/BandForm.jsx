import React from 'react'
import Header from './components/Header'
import Form from './components/Form'

const BandForm = ({ band }) => {
  return (
    <div>
      <Header band={band} />
      <div className="details">
        <div className="info">
          <img src={band.imgUrl} alt={band.name} />
          <div dangerouslySetInnerHTML={{__html: band.description_blurb}} />
        </div>
        <div className="form-container">
          <div className="form">
            <h2>
              Select Tickets
            </h2>
            <Form band={band} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BandForm;



