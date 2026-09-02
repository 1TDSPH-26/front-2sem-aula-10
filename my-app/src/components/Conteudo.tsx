import imgQuadrada from "../img/quadrado.png";

export default function Conteudo() {
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
            <figure>
            <img src={imgQuadrada} alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 600 x 400</figcaption>
            </figure>
            <figure>
            <img src="/quadrado.png" alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 600 x 400</figcaption>
            </figure>
        </section>
    </main>
  )
}
