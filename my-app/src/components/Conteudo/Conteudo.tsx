import { useState } from "react"
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {

        const[mostraSecao, setMostraSecao] = useState(false);
 
      const alternaSecao = () =>{
 
        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);
      }


  return (
    <main>
      <section>
        <h2>Conteúdo Básico</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos soluta sed vero reiciendis enim nam, aut perferendis,
          sit velit ratione placeat, distinctio eius rerum maxime id
          perspiciatis repudiandae non! Tenetur.
        </p>
      </section>
      <section>
        <h2>Exemplo de Imagens</h2>
        {/*Esta imagem tem referência externa */}
        <figure>
            <img src="https://placehold.co/400x400/c1c1c1/000000/png" 
            alt="Exemplo de Imagem" />
            <figcaption>Bloco de Imagem 400x400</figcaption>
        </figure>

        {/* Esta imagem tem referência interna na /src */}
        <figure>
            <img src= {imgQuadrada} alt="Exemplo de Imagem" />
            <figcaption>Bloco de imagem 400 x 400</figcaption>
        </figure>

        {/* Esta imagem tem referência interna na public */}
        <figure>
            <img src="/img/quadrado.png" alt="Exemplo de Imagem" />
        </figure>
      </section>

      <section>
        <h2>Especial</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere excepturi laboriosam laudantium culpa asperiores itaque odit maxime officiis, hic ipsa aliquam tempore provident neque quo voluptatum corporis dolorum est unde pariatur. Quae quaerat eaque sequi id veniam distinctio sapiente quas. Praesentium quisquam deserunt enim? Molestiae harum est obcaecati sed quis?</p>
      </section>
      <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER" : "MOSTRAR"}</button>
    </main>
  );
}