import React from 'react';
import styled from 'styled-components';
import Search from '../assets/Search.svg';
import Shrek from '../assets/Shrek.png';
import Sozinho from '../assets/Sozinho.png';
import Spiderman from '../assets/Spiderman.png';
import Sonho from '../assets/Sonho.png';
import Horas from '../assets/Horas.png';
import Galinhas from '../assets/Galinhas.png';
import Rocketman from '../assets/Rocketman.png';
import Amar from '../assets/Amar.png';
import Coracao from "../assets/Coracao.svg";
import Coracao2 from '../assets/CoracaoBranco.svg';
import Thumb from "../assets/verde.svg";
import Thumb2 from '../assets/branco.svg';
import Thumb3 from '../assets/laranja.svg';
import Thumb4 from '../assets/vermelho.svg';

const Pag = styled.h1`
position: relative;
left: 5%;
top: 40%;
text-align: left;
font: normal normal normal 29px/33px Arial;
`;

const Container = styled.div`
display: grid;
grid-template-columns: 200px 200px 200px 200px;
grid-column-gap: 80px;
grid-row-gap: 30px;
margin-left: 4%;
margin-top: 2%;
`;

const ContainerSobre = styled.div`
width: 100%;
font-family: Arial;
display: flex;
justify-content: space-between;
`;

const BtnFav = styled.button`
position: absolute;
margin-top: 0.5%;
margin-left: 17%;
background: transparent;
border-style: none;
cursor: pointer;
`;

const TituloFilmes = styled.h3`
font: normal normal bold 16px/18px Arial;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`;

const ContainerAv = styled.div`
position: relative;
left: 20%;
`;

const Scores = styled.p`
font: normal normal bold 13px/15px Arial;
`;

const BtnLike = styled.button`
background: transparent;
border-style: none;
margin-left: 6px;
`;

const Desc = styled.p`
font: normal normal normal 12px/14px Arial;
`;

export default class Todos extends React.Component {
  state = {
    todos: [{
      like: Thumb,
      score: "4/5",
      title: "Shrek",
      fav: Coracao,
      img: Shrek,
      desc: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
    },
    {
     like: Thumb2,
      score: "-",
      title: "Hoje Eu Quero Voltar...",
      fav: Coracao2,
      img: Sozinho,
      desc: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
    },
    {
    like: Thumb3,
      score: "3/5",
      title: "Spider-Man",
      fav: Coracao2,
      img: Spiderman,
      desc: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
    },
    {
    like: Thumb,
      score: "4,5/5",
      title: "Um Sonho de...",
      fav: Coracao,
      img: Sonho,
      desc: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
    },
    {
    like: Thumb2,
      score: "-",
      title: "Que Horas Ela Volta?",
      fav: Coracao,
      img: Horas,
      desc: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
    },
    {
    like: Thumb4,
      score: "2/5",
      title: "A Fuga das Galinhas",
      fav: Coracao,
      img: Galinhas,
      desc: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
    },
    {
    like: Thumb,
      score: "5/5",
      title: "AmarElo",
      fav: Coracao2,
      img: Amar,
      desc: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
    },
    {
      like: Thumb2,
      score: "-",
      title: "Rocketman",
      fav: Coracao,
      img: Rocketman,
      desc: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
    }
  ],
  filmesfiltrados: [],
};

componentDidMount(){
  this.setState({
    filmesfiltrados: this.state.todos
  })
}

filter = (e) => {
  this.setState({
    filmesfiltrados: this.state.todos
  })

  const filtrodefilmes = this.state.todos.filter((item) =>{
    if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
    return true;
    }
  });

  this.setState({
    filmesfiltrados: filtrodefilmes
  })
};

  render(){
  return (
    <>
    <div className='divBusca'>
    <button className='btnBusca'><img src={Search} /></button>
      <input type="text" 
      className='txtBusca'
      placeholder='Pesquisar' 
      onChange={this.filter}
      />
     </div>
    <Pag>Todos</Pag>
      <Container>
        {this.state.filmesfiltrados.map((item) =>(
          <ul>
            <BtnFav><img src={item.fav} /></BtnFav>
            <img src={item.img} />
            <ContainerSobre>
            <TituloFilmes>{item.title}</TituloFilmes>
            <ContainerAv>
            <Scores>{item.score}
            <BtnLike><img src={item.like} /></BtnLike>
            </Scores>
            </ContainerAv>
            </ContainerSobre>
            <Desc>{item.desc}</Desc>
          </ul>
        ))}
      </Container>
    </>
  )
}
}