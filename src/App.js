
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Conteudo,{OlaMundo} from './componentes/Conteudo'

/*
Arquivo App JSX
Componente Funcional = Porque é uma função
*/

function App() {

  OlaMundo();
/*Todo componente deve retornar um html entre parenteses*/
  return (
/*O react substitui className por class porque class é uma palavra reservada do JS*/
    <>
   
    <Cabecalho logo='logo192.png' titulo="favorite.me" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>

    <Conteudo/>
    <Rodape titulo='Feito por alguém do IFRN'/>
    </>
  );
}

export default App;


