import quadrado from '../img/quadrado.png'
import { useState } from 'react';
export default function Conteudo() {
  const[mostraSecao, setMostraSecao] = useState(false);

  const alternaSecao = () => {
    setMostraSecao(!mostraSecao);
    console.log(mostraSecao);
  };

  return (
    <main>
      <h2>Conteúdo</h2>
      <section>
        <h2>Exemplo imagens</h2>
        <figure>
          <img src="https://placehold.co/600x400/1c1c1c1/FFFFFF/png" alt="Imagem de exemplo" />
          <figcaption>Figura 1: Imagem de exemplo</figcaption>
        </figure>
        <figure>
          <img src={quadrado} alt="Imagem de exemplo" />
          <figcaption>Figura 1: Imagem de exemplo</figcaption>
        </figure>
      </section>
      <button onClick={alternaSecao}>{mostraSecao ? 'Esconder secao' : 'Mostrar secao'}</button>
    </main>
  )
}

