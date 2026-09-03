import { useState } from "react";
import imgQuadrada from "../../imgs/quadrada.png";

export default function Conteudo() {
    
      const[mostraSecao, setMostraSecao] = useState(false);

      const alternaSecao = () => {

        setMostraSecao(!mostraSecao);
        console.log( mostraSecao);
    }


  return (
    <main>
        <section>
            <h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum accusantium corporis ex illo nesciunt, et eos optio incidunt saepe, explicabo repellendus, recusandae sed? Id ea animi incidunt officiis eius?</p>
            </h2>
        </section>

        <section>   
            <h2>Exemplo de Imagens </h2>
            {/* Esta imagem tem referência externa */}
            <figure>
                <img src="https://placehold.co/400x400/c1c1c1/000000/png" 
                alt="Exemplo de Imagem" />
                <figcaption>Bloco de Imagem 400 x 400</figcaption>
            </figure>

            {/* Esta imagem tem referência interna na /src */}
            <figure>
                <img src={imgQuadrada} alt="Exemplo de Imagem" />
                <figcaption>Bloco de Imagem 400 x 400</figcaption>
            </figure>

            {/* Esta imagem tem referência interna na public */}
            <figure>
                <img src="/img/quadrado.png" alt="Exemplo de Imagem" />
                <figcaption>Bloco de Imagem 400 x 400</figcaption>
            </figure>
        </section>

        <section>
            <h2>Especial</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sit fugit, assumenda autem iure non optio facilis ex similique aut quaerat in reprehenderit nam, vel totam obcaecati? Pariatur, ipsum itaque?</p>
        </section>
        <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER" : "MOSTRAR"}</button>
    </main>
  );
}