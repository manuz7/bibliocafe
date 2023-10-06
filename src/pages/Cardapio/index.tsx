import styles from './Cardapio.module.scss'

import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio(){
  const [buscar, setBusca] = useState("");
    return (
        <main>
            <nav className={ styles.menu }>
            {}
            </nav>
            <header className={ styles.header }>
                <div className= { styles.header__text }>
                  "Bibliocafe, onde sua leitura é deliciosa!"
                </div>
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo} >cardapio</h3>
              <Buscador busca={buscar} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
