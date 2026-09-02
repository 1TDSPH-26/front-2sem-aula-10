import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Rodape from "./componentes/Rodape/Rodape";

export default function App(){

  return(
    <div>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}