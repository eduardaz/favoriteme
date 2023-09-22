
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Conteudo from './componentes/Conteudo'

/*
Arquivo App JSX
Componente Funcional = Porque é uma função
*/

function App() {

 
/*Todo componente deve retornar um html entre parenteses*/
  return (
/*O react substitui className por class porque class é uma palavra reservada do JS*/
    <>
   
    <Cabecalho logo='logo512.png' titulo="favorite.me" subtitulo='Aqui você faz a escolha certa!'/>
    <Conteudo/>

    <Rodape database="dwqqweww" logo1='logo1.png' logo2='logo2.png' logo3='logo3.png' />
    
    </>
  );
}

export default App;


