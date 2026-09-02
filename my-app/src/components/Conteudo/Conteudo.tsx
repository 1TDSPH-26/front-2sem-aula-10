import imgQuadrado from "../../img/quadrado.png";


export default function Conteudo(){
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
       </main>
    );
}