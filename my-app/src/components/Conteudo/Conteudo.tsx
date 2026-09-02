import { useState } from "react";
import imgQuadrada from"../../img/quadrado.png"; 

export default function Conteudo() {

    const[mostraSecao, setMostraSecao] = useState(false);

    const alternaSecao = () => {

        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);
    }

    return (
        <main>
            <section>
                <h2>Conteúdo Básico</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta sed vero reiciendis enim nam, aut perferendis, sit velit ratione placeat, distinctio eius rerum maxime id perspiciatis repudiandae non! Tenetur.</p>
            </section>

            <section>
                <h2>Exemplo de Imagens</h2>

                {/* Esta imagem tem referência externa */}
                <figure>
                    <img src="https://placehold.co/400x400/1c1c1c1/000000/png" alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400x400</figcaption>
                </figure>

                {/* Esta imagem tem referência interna na /src */}
                <figure>
                    <img src={imgQuadrada} alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400x400</figcaption>
                </figure>

                {/*Esta imagem tem referência interna na public */}
                <figure>
                    <img src="/img/quadrado.png" alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400x400</figcaption>
                </figure>
            </section>

            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo dolore animi quod dolor tenetur quis aliquam ullam illum, odit perferendis officia nobis commodi id? Enim magnam error autem veritatis consequuntur, exercitationem assumenda rerum quas necessitatibus est reprehenderit ab praesentium quasi libero, id possimus numquam rem voluptate doloremque debitis consequatur?</p>
            </section>
            <button onClick={alternaSecao}>
                {mostraSecao ? "Esconder Seção" : "Mostrar Seção"}
            </button>
        </main>
    );
}