import React from 'react';

import './styles/Tweet.scss';

const Tweet = () => {
  return (
    <div className="Tweet-Container">
      <div className="Avatar">
        <img
          src="https://www.eleganciadospuntocero.com/wp-content/uploads/2013/03/Huevo-twitter-avatar.jpg"
          alt="avatar"
        />
      </div>
      <div className="col Tweet-Content">
        <div className="Tweet-Header">
          Nombre Apellido
          <span className="Tweet-Info"> • 50s</span>
        </div>
        La plata los pone locos a todos, yo por suerte disfruto de mis
        galletitas trio. Ahora con un nuevo sabor a mermelada y merca, cada vez
        mas cerca de vos. Encontralas en tu kiosko de las esquina!!
      </div>
    </div>
  );
};

export default Tweet;
