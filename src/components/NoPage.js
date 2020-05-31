import React from 'react';
import Banner from './Banner';
 
function NoPage(props) {
  return (
    <React.Fragment>       
      <section class="top-sales">
          <h2 class="text-center">Страница не найдена</h2>
          <p>
              Извините, такая страница не найдена!
          </p>
      </section>
    </React.Fragment>
  );
}

export default NoPage;