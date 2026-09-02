import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo(){

    return(
        <main>
            <section>
                <h2>Conteudo Básico</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti beatae cumque blanditiis voluptate voluptatum 
                    doloribus tenetur molestias dicta enim! Odio, sit? Delectus 
                    quo ex harum minus quam quasi illum repellat?
                </p>
            </section>
            <section>
                <h2>Exemplo de imagens</h2>
                <figure>
                    <img src="https://placehold.co/600x400/1c1c1c1/FFFFFF/png" alt="Exemplo de imagem" />
                </figure>
                <figcaption>Bloco de imagem 600 x 400</figcaption>
                <figure>
                    <img src={imgQuadrada} alt="Exemplo de imagem" />
                </figure>
                <figcaption>Bloco de imagem 400 x 400</figcaption>
                <figure>
                    <img src="/public/img/quadrado.png" alt="Exemplo de imagem" />
                </figure>
                <figcaption>Bloco de imagem 400 x 400</figcaption>
            </section>
            
        </main>
    );
}