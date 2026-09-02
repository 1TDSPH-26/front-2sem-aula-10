import imgQuadrado from '../../img/quadrado.png';

export function Conteudo() {
  return (
    <main>
      <h2>Conteúdo Principal</h2>
      <figure>
        <img 
          src={"imgQuadrado"} 
          
          alt="Imagem de exemplo" 
        />
        <figcaption>Legenda da imagem de exemplo</figcaption>
      </figure>
    </main>
  );
}