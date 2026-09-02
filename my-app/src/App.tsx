import React from 'react';

// 1. Definição da interface para as Props (propriedades)
interface BotaoProps {
  texto: string;
  onClick: () => void;
}

// 2. Declaração do componente funcional
export const BotaoBasico: React.FC<BotaoProps> = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className="btn-primario">
      {texto}
    </button>
  );
};
