import React from 'react';
 
function NoPage(props) {
  return (
    <React.Fragment>       
      <section className="top-sales">
          <h2 className="text-center">Страница не найдена</h2>
          <p>
              Извините, такая страница не найдена!
          </p>
      </section>
    </React.Fragment>
  );
}

export default NoPage;