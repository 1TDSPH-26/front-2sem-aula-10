import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo Básico</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          soluta sed vero reiciendis enim nam, aut perferendis, sit velit
          ratione placeat, distinctio eius rerum maxime id perspiciatis
          repudiandae non! Tenetur.
        </p>
      </section>
      <section>
        <h2>Exemplo de Imagens</h2>
        {/* Esta imagem tem referência externa */}
        <figure>
          <img
            src="https://placehold.co/400x400/c1c1c1/000000/png"
            alt="Exemplo de imagem"
          />
          <figcaption>Bloco de Imagem 400 x 400</figcaption>
        </figure>

        {/* Esta imagem tem referência interna na /src */}
        <figure>
          <img src={imgQuadrada} alt="Exemplo de imagem" />
          <figcaption>Bloco de Imagem 400 x 400</figcaption>
        </figure>

        {/* Esta imagem tem referência interna na public */}
        <figure>
          <img src="/img/Quadrado.png" alt="Exemplo de imagem" />
          <figcaption>Bloco de Imagem 400 x 400</figcaption>
        </figure>
      </section>
    </main>
  );
}