import { useState } from "react"
import imgQuadrada from "../../img/quadrado.png"

export default function Conteudo() {

        const[mostraSecao, setMostraSecao] = useState(false);
 
      const alternaSecao = () =>{
 
        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);
      }

    return (
        <main>
            <section>
                <h2>Conteudo basico</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deserunt error, fugiat dolor laboriosam aut animi consectetur corrupti quae explicabo pariatur fuga libero sed ipsum? Optio dolorum quae a soluta?</p>
            </section>
            <section>
                <h2>Exemplo de imagens</h2>
               {/*Esta imagem tem referencia externa*/} 

               <img src="https://placehold.co/400x400/c1c1c1/000000/png" alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 400 x 400 </figcaption>

            {/*Esta imagem tem referencia interna*/} 

            <img src={imgQuadrada} alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 400 x 400 </figcaption>

            {/*Esta imagem tem referencia interna na public*/} 

            <img src="/img/quadrado.png" alt="Exemplo de imagem" />
            <figcaption>Bloco de imagem 400 x 400 </figcaption>
            </section>

            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quae sapiente labore recusandae ab magni laborum iure, veniam excepturi delectus sunt omnis sint culpa pariatur illum asperiores ut aliquid aut sequi ratione soluta accusamus. At, vitae officiis hic adipisci aliquam inventore laboriosam dignissimos ut placeat, magni odit temporibus consequatur harum.</p>
            </section>
            <button onClick={alternaSecao}>{mostraSecao ? "ESCONDER" : "MOSTRAR"}</button>
            
        </main>
    )
    

}