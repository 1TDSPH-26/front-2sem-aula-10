import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {
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
        </main>
    )
}