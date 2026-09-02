import { useState } from "react";
import imgQuadrado from "../../img/png.png";



export default function Conteudo() {


      const[mostraSecao, setMostraSecao] = useState(false);

      const alternaSecao = () => {
      
        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);

      }

  return (
    <main>
      <h2>Conteúdo Básico</h2>
      <p>Este é o conteúdo principal da minha aplicação.</p>

      <section>
        <h2>Exemplo de Imagem</h2>
        {/*Esta imagem tem referencia externa*/}
        <figure>
          <img src="https://placehold.co/600x400/1c1c1c1/00000/png" alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>

         {/*Esta imagem tem referencia interna na /src*/}
        <figure>
          <img src={imgQuadrado} alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>

         {/*Esta imagem tem referencia interna na public*/}
        <figure>
          <img src="/png.png" alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>
      </section>

      <section>
        <h2>Especial</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo deleniti dignissimos, praesentium et voluptas in temporibus assumenda eligendi delectus sapiente commodi molestias cum adipisci itaque nihil magni dolorum quo esse quos? Voluptas, eligendi. Placeat consectetur autem in delectus accusantium, modi rerum. Harum velit earum ea quaerat, corrupti maxime ipsum minus.</p>
      </section>
      <button onClick={alternaSecao}>{mostraSecao ? "ESCONDE" : "MOSTRAR"}</button>
    </main>
  );
}