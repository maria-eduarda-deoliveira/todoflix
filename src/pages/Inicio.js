import React from 'react';
import styled from 'styled-components';
import Carousel from "nuka-carousel";
import Search from '../assets/Search.svg';
import Capitao from '../assets/Capitao.png';
import Thumb from "../assets/verde.svg";
import Thumb2 from '../assets/branco.svg';
import Thumb3 from '../assets/laranja.svg';
import Shrek from "../assets/Shrek.png";
import Sozinho from "../assets/Sozinho.png";
import Spiderman from '../assets/Spiderman.png';
import Sonho from '../assets/Sonho.png';
import Horas from '../assets/Horas.png';
import Arrow from '../assets/Arrow.svg';
import Coracao from "../assets/Coracao.svg";
import Coracao2 from '../assets/CoracaoBranco.svg';

const Body = styled.body`
background-color: #000;
height: 100%;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
color: #fff;
font-family: Arial;
`;

const CapitaoContainer = styled.div`
position: absolute;
top: 25%;
left: 40%;
`;

const CapitaoImg = styled.img`
margin: 5%;
width: 30%;
`;

const TituloCapitao = styled.h1`
text-align: left;
font: normal normal bold 40px/45px Arial;
`;

const SobreCapitao = styled.p`
text-align: left;
font: normal normal normal 14px/18px Arial;
width: 40%;
`;

const Avaliacao = styled.div`
display: flex;
padding: 6px;
text-align: left;
font: normal normal bold 16px/17px Arial;
`;

const AvBtn = styled.button`
background: transparent;
position: absolute;
top: 88%;
left: 4%;
border-style: none;
cursor: pointer;
`;

const ContainerSlide = styled.div`
font-family: Arial;
color: #fff;
`;

const TituloSlide = styled.h4`
text-align: left;
font: normal normal bold 16px/18px Arial;
`;

const TextoSlide = styled.p`
text-align: left;
font: normal normal normal 14px/15px Arial;
`;

const BtnNext = styled.button`
background: transparent;
border-style: none;
cursor: pointer;
`;

const DestaqueCarousel = styled.h4`
position: absolute;
left: 2%;
top: 64%;
font: normal normal bold 18px/21px Arial;
color: #fff;
`;

const BtnFav = styled.button`
position: absolute;
background: transparent;
border-style: none;
margin-left: 39%;
top: 2%;
cursor: pointer;
`;

const ContainerAv = styled.div`
display: flex;
justify-content: space-between;
`;

const BtnLike = styled.button`
background: transparent;
border-style: none;
margin-left: 3px;
width: 16px;
`;

const Scores = styled.p`
font: normal normal bold 13px/15px Arial;
`;

export default class Inicio extends React.Component {

  state = {
    filmes : [{
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
      title: "Um Sonho de Liberdade",
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
    }
  ],

  filtrados: [],
};

componentDidMount(){
  this.setState({
    filtrados: this.state.filmes
  })
}

filter = (e) => {
  this.setState({
    filmesfiltrados: this.state.filmes
  })

  const filtro = this.state.filmes.filter((item) =>{
    if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
    return true;
    }
  });

  this.setState({
    filtrados: filtro
  })
};

render(){
  return (
    <>
    <Body>
      <Container>
      <CapitaoImg src={Capitao} />
      <CapitaoContainer>
      <img src={Coracao} />
      <p>Visto recentemente</p>
      <TituloCapitao>Capitão Fantástico</TituloCapitao>
      <SobreCapitao>Nas florestas do estado de Washington, 
        um pai cria seus seis filhos longe da civilização, 
        em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento 
        e leva sua família para encarar o mundo, desafiando sua ideia do que 
        significa ser pai.</SobreCapitao>
        <Avaliacao>
        <h5>4/5</h5>
        <AvBtn><img src={Thumb} /></AvBtn>
        </Avaliacao>
        </CapitaoContainer>
      </Container>

      <div className='divBusca'>
    <button className='btnBusca'><img src={Search} /></button>
      <input type="text" 
      className='txtBusca'
      placeholder='Pesquisar' 
      onChange={this.filter}
      />
     </div>

      <DestaqueCarousel>Destaques</DestaqueCarousel>

      <Carousel
      wrapAround= {true}
      slidesToShow= {5}
      cellSpacing= {15}
      enableKeyboardControls={true}
      renderBottomCenterControls={false}
      renderCenterLeftControls={false}
      autoplay={true}

      renderCenterRightControls={({ nextSlide }) => (
        <BtnNext onClick={nextSlide}>
          <img src={Arrow} />
        </BtnNext>
      )}
      >

        {this.state.filtrados.map((item) =>(
          <ContainerSlide>
          <ul>
            <BtnFav><img src={item.fav} /></BtnFav>
            <img src={item.img} />
            <ContainerAv>
            <TituloSlide>{item.title}</TituloSlide>
            <Scores>
              {item.score}
              <BtnLike><img src={item.like} /></BtnLike>
              </Scores>
            </ContainerAv>
            <TextoSlide>{item.desc}</TextoSlide>
          </ul>
          </ContainerSlide>
        ))}
      </Carousel>
    </Body>
    </>
  )
}
}
