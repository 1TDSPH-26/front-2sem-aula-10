import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo(){

        const[mostraSecao, setMostraSecao] = useState(false);

        const alternaSecao = () => {

            setMostraSecao(!mostraSecao);
            console.log(mostraSecao);
        }


    return(
       <main>
            <section>
                <h2>Conteudo Basico</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            <section>
                <h2>Exemplo de Imagem</h2>
                <figure>
                    <img src="https://placehold.co/400x400/c1c1c1/FFFFFF/png" alt="Exemplo de imagem" />
                    <figcaption>Bloco de imagem 400 x 400</figcaption>
                </figure>
                <figure>
                    {/* Esta imagem tem referencia interna na /src */}
                    <img src="{imgQuadrado}" alt="Exemplo de imagem" />
                    <figcaption>Bloco de imagem 400 x 400</figcaption>
                </figure>
                <figure>
                    {/* Esta imagem tem referencia interna na public */}
                    <img src="/img/quadrado.png" alt="Exemplo de imagem" />
                    <figcaption>Bloco de imagem 400 x 400</figcaption>
                </figure>
            </section>

            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium tenetur odio vitae fugit unde nam quae! Minima doloremque facere ad hic necessitatibus numquam fugiat natus ut modi asperiores illum suscipit, fuga, voluptatibus ipsum repellendus dolor animi vero minus. Doloribus quasi temporibus unde perferendis dolores, rerum quae tempore hic maxime saepe dignissimos obcaecati voluptatibus ad ratione, fugit eligendi consequatur ab. Eum ad quas perspiciatis sit numquam. Eveniet culpa accusamus obcaecati.</p>
            </section>
            <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER" : "MOSTRAR"}</button>
       </main>
    );
}