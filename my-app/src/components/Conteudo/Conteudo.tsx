import { useState } from "react";
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
                <h2>Conteúdo básico</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cumque dolore asperiores dolorum eaque commodi numquam adipisci? Quibusdam optio repellat non. Repellat, corporis veniam velit aliquid repellendus autem pariatur. Libero?</p>
            </section>
            <section>
                <h2>Exemplo de imagem</h2>
                <figure>
                    <img src="https://placehold.co/400x400/1c1c1c1/000000/png" alt="Imagem e exemplo" />
                    <figcaption>Bloco de imagens 400 x 400</figcaption>
                </figure>
                <figure>
                    <img src={imgQuadrada} alt="Imagem e exemplo" />
                    <figcaption>Bloco de imagens 400 x 400</figcaption>
                </figure>
            </section>
            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eligendi repellendus a incidunt nam assumenda animi, dolore consectetur iure rerum repudiandae. Recusandae molestias doloremque, velit cum quibusdam eius fugiat optio voluptates repellendus tempore! Illum, a iure! Natus quos aliquid in cupiditate corrupti vel atque, dignissimos distinctio consequatur sit nostrum saepe.</p>
            </section>
            <button onClick={alternaSecao}>{mostraSecao ? "Esconder" : "Mostrar"}</button>
        </main>
    )
}