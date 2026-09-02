import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo(){
    return(
        <main>
            <section>
                <h2>Conteúdo Básico</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id doloremque sint esse odio tempore ipsam, quas debitis corrupti cupiditate necessitatibus unde ratione nam? Quos optio eos rem qui placeat.</p>
            </section>
            <section>
                <h2>Exemplo de Imagens</h2>
                {/* Referência  Link externo*/}
                <figure>
                    <img src="https://placehold.co/400x400/c1c1c1/000000/png" alt="Imagem Exemplo1" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
                {/* Referência interna no src */}
                <figure>
                    <img src={imgQuadrada} alt="Imagem Exemplo2" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
                {/* Referência interna na public */}
                <figure>
                    <img src="/img/quadrado.png" alt="Imagem Exemplo3" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
            </section>
        </main>
    );
}