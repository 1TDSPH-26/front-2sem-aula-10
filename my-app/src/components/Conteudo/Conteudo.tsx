import Quadrado from '../../img/quadrado.png'

export default function Conteudo() {

    return(
        <main>
            <div>
                <h1>Hero Page</h1>
            </div>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            </section>
            <section>
                <figure>
                    <img src="https://placehold.co/600x400/1c1c1c1/FFFFFF/png" alt="" />
                    <figcaption>Bloco de imagem 600x400</figcaption>
                </figure>

                 <figure>
                    <img src={Quadrado} alt="" />
                    <figcaption>Bloco de imagem 400x400</figcaption>
                </figure>

            </section>
        </main>
    )
}