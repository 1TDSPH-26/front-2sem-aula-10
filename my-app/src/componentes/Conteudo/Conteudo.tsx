import { useState } from "react";
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo(){
    const[mostraSecao, setMostraSecao] = useState(false);
    const alternaSecao = ()  =>{
        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);
    }
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
            <section>
                <h2>Especial</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi aliquam dolorem, ad illum voluptatibus animi, ullam sit facere ipsum doloribus quam aspernatur placeat laboriosam maiores rem, ab delectus dicta iste! Rerum inventore quos est provident cupiditate maxime enim non fuga nobis laudantium expedita blanditiis voluptate labore ratione, itaque excepturi.
                </p>
            </section>
            <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER" : "MOSTRAR"}</button>
        </main>
    );
}