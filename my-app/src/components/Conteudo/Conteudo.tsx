import imgQuadrada from "../../img/png.png";

export default function Conteudo(){
    return(
        <main>
            <section>
                <h2>conteudo basico</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque ipsum voluptate voluptatibus minima animi dolores accusamus nulla laborum asperiores ratione fugit molestias dignissimos vero expedita odio, eum dolore voluptas.</p>
            </section>
            <section>
                <h2>Imagem Exemplo</h2>
                
                <figure>
                    <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="exemplo de imgem" />
                    <figcaption> Bolco de imagem 600 x 400</figcaption>

                </figure>
                <figure>
                    <img src={imgQuadrada} alt="exemplo de imgem" />
                    <figcaption> Bolco de imagem 600 x 400</figcaption>

                </figure>

                <figure>
                    <img src="/img/image.png" alt="exemplo de imgem" />
                    <figcaption> Bolco de imagem 600 x 400</figcaption>

                </figure>

            </section>
        </main>
    )
}
