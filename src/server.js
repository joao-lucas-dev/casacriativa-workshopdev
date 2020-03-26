import express from 'express';
import nunjunks from 'nunjucks';

const server = express();

nunjunks.configure('src/app/views', {
  express: server,
  noCache: true,
});

server.use(express.static('public'));

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Cursos de programação",
    category: "Estudo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dicta accusamus velit, necessitatibus ut asperiores sed!",
    url: "https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dicta accusamus velit, necessitatibus ut asperiores sed!",
    url: "https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dicta accusamus velit, necessitatibus ut asperiores sed!",
    url: "https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    title: "Karaokê",
    category: "Diversão em Família",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dicta accusamus velit, necessitatibus ut asperiores sed!",
    url: "https://rocketseat.com.br"
  },
]

server.get('/', (req, res) => { 
  
  const reserveIdeas = [...ideas].reverse();
  const lastIdeas = [];

  for(let idea of reserveIdeas) {
    if (lastIdeas.length < 3) {
      lastIdeas.push(idea);
    }
  };

  return res.render('index.html', { ideas: lastIdeas });
});
server.get('/ideas', (req, res) => {
  const reserveIdeas = [...ideas].reverse();

  return res.render('ideas.html', { ideas: reserveIdeas });
});

server.listen(3333);