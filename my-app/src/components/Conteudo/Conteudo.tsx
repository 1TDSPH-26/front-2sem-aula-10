import berrete from "../../img/berrete.png";

export default function Conteudo() {
  return (
    <main>
      <h2>Conteúdo</h2>

      <p>
        Este é o conteúdo principal da minha aplicação React.
      </p>

      <section>
        <h2>Lista aleatória</h2>
        <p>Produto aleatório - R$ 14,90</p>

    <figure>
        <img
            src="https://placehold.co/600x400/FFFFF0/FFFFFF/png"
            alt="Imagem placeholder"/>
            <figcaption>Imagem de exemplo 600x400</figcaption>
        </figure>
      
     <figure>
         <img src={berrete} alt="Berrete" />
         <figcaption>Killua com Berrete do Lord Renan</figcaption>
        </figure>

      </section>
    </main>
);
}
