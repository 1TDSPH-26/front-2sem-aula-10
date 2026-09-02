import imgQuadrado from "../../img/png.png";



export default function Conteudo() {
  return (
    <main>
      <h2>Conteúdo Básico</h2>
      <p>Este é o conteúdo principal da minha aplicação.</p>

      <section>
        <h2>Exemplo de Imagem</h2>
        {/*Esta imagem tem referencia externa*/}
        <figure>
          <img src="https://placehold.co/600x400/1c1c1c1/00000/png" alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>
         {/*Esta imagem tem referencia externa*/}
        <figure>
          <img src={imgQuadrado} alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>
         {/*Esta imagem tem referencia interna na public*/}
        <figure>
          <img src="/png.png" alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>
      </section>
    </main>
  );
}