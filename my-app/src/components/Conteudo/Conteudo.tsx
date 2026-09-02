import { useState } from "react";
import imgQuadrada from "../../img/png.png";

export default function Conteudo(){


        const[mostraSecao, setMostraSecao] = useState(false);

        const alternaSecao = () =>{

        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);
    }
    
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

            <section>
                <h2>Especial</h2>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore distinctio enim debitis quod quaerat cupiditate, optio eaque obcaecati nihil excepturi quam consequuntur, magnam beatae delectus. Doloribus placeat, recusandae reiciendis deleniti sequi est dicta doloremque eum nihil earum vero sed libero qui nesciunt dolorem minus alias nostrum hic quisquam laboriosam!</p>

            </section>
            <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER": "MOSTRAR"}</button>
        </main>
    )
}
