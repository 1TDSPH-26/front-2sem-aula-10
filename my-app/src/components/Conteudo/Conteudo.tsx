import { useState } from 'react'
import image from '../../img/image.png'

export default function Conteudo() {
     const [mostraSecao, setMostraSecao] = useState(false)
     const alternaSecao = () => {
          setMostraSecao(!mostraSecao)
          console.log('mostraSecao', mostraSecao)
     }

     return (
          <main>
               <section>
                    <h2>Conteúdo principal</h2>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                         accusamus dolorem reprehenderit illum omnis vero, maiores temporibus
                         amet culpa doloribus aut impedit blanditiis, vitae, ipsam est autem
                         provident fugiat exercitationem reiciendis cum.
                    </p>
                    <button onClick={alternaSecao}>Alternar imagens</button>
               </section>

               {mostraSecao && (
                    <section>
                         <h2>Exemplos de imagens</h2>
                         <figure>
                              <img
                                   src="https://placehold.co/400x400/c1c1c1/000000/png"
                                   alt="Imagem de exemplo externa"
                              />
                              <figcaption>Bloco de Imagem 400 x 400</figcaption>
                         </figure>

                         <figure>
                              <img src={image} alt="Imagem de exemplo interna" />
                              <figcaption>Bloco de Imagem 400 x 400</figcaption>
                         </figure>

                         <figure>
                              <img src="/quadrado.png" alt="Imagem de exemplo pública" />
                              <figcaption>Bloco de Imagem 400 x 400</figcaption>
                         </figure>
                    </section>
               )}
          </main>
     )
}