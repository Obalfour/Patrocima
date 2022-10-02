import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Talentos</h2>
          <p>
            Dedicación. Expertise. Pasión.
          </p>
        </div>
        <div className='row'>

        <div className="container talent-item">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/talento/01.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text talent-description">
                <h2>Mel Krywoj</h2>
                <h3>Apasionada por lo que hace, en su libertad elige este deporte una y otra vez.</h3>
                <p>Hoy es una promesa del tenis Argentino y sueña con pisar las "grandes ligas" a nivel internacional 
                  postulándose en el top 50 del mundo.</p>
                <p>Correr, aguantar y jugar con variantes son sus fuertes. Su vida está dedicada al tenis, lo sufre, lo transpira, 
                  lo piensa, lo ama y lo vuelve a elegir cada vez que golpea una pelota.</p>
                <a href='https://www.youtube.com/watch?v=BR4yI8vLgX0'>
                  <i className='fa fa-youtube'></i> Ver presentación
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container talent-item">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text talent-description">
                <h2>Agustina Zeballos</h2>
                <h3>A puta garra, busca posicionarse como una de las maximas exponentes del golf.
                </h3>
                <p>Desde muy pequeña, Zeballos se destacó por su juego y ganó campeonatos. Con solo 11 años ganó un certamen del 
                  Ranking mayor en el club Náutico Hacoaj y llegó a hándicap 0.</p>
                <p>La joven golfista se convirtió en la primera mujer argentina en jugar el certamen del ANWA.</p>
                <a href='https://www.youtube.com/watch?v=gw13rpv-ZtM'>
                  <i className='fa fa-youtube'></i> Ver presentación
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/talento/02.jpg" className="img-responsive" alt="" />{" "}
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
