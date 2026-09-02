import { useState } from "react";
import imgQuadrada from "../img/quadrado.png";

export default function Conteudo() {
    const[mostraSecao, setMostraSecao] = useState(false);

   const alternaSecao = () => {
  setMostraSecao(!mostraSecao);
  console.log(mostraSecao);
}

  return (
    <main>
        <section>
            <h2>Contéudo da minha aplicação</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi magni, veniam, accusamus dolorem veritatis quas dolores repellendus libero ratione fuga, ad nobis? Rem doloribus odio deleniti repellendus! Totam, doloremque.</p>
        </section>
        <section>
            <h2>Exemplo de imagens</h2>
            {/*Esta imagem tem referência exterta*/}
            <figure>
            <img src="https://placehold.co/600x400/fff333/FFFFFF/png" 
            alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 600 x 400</figcaption>
            </figure>
            {/*Esta imagem tem referência interna na /src*/}
            <figure>
            <img src={imgQuadrada} alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 600 x 400</figcaption>
            </figure>
              {/*Esta imagem tem referência interna na /public*/}
            <figure>
            <img src="/quadrado.png" alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 600 x 400</figcaption>
            </figure>
        </section>

        <section>
            <h2>Especial</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor, animi quisquam quidem illo eaque. Ullam expedita ad dolorum animi porro. Mollitia omnis necessitatibus hic est incidunt aliquid placeat delectus dolores numquam corporis eveniet soluta qui corrupti quidem, dolorum ab aut, veniam tempora. Laborum suscipit sequi eius sit porro soluta?</p>
        </section>
        <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER" : "MOSTRAR"}</button>
    </main>
  )
}
