import Container from "@/components/Container";
import BoxScroll from "@/components/BoxScroll";
import SkillsBar from "@/components/SkillsBar";
import CardProjects from "@/components/CardProjects";
import Footer from "@/components/Footer";
import MyInfos from './../components/MyInfos';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col relative min-h-screen">
        <MyInfos/>
        <div className="flex flex-col items-end lg:absolute relative top-0 right-0 w-full lg:w-1/2">
          <BoxScroll>
            <div className="flex flex-col lg:pt-20 pt-16">
              <h2 className="text-2xl font-semibold text-emerald-300">Sobre</h2>
              <p className="text-slate-400/80">
                Olá! Meu nome é <span className="text-white">João Leandro</span> e sou apaixonado por tecnologia e
                desenvolvimento web. Graduei-me em Análise e Desenvolvimento de
                Sistemas e desde então tenho trilhado uma jornada empolgante no
                mundo da programação.
                <br />
                Minha jornada começou em 2022, quando fui apresentado ao
                fascinante universo da programação por meio de amigos que
                compartilhavam o mesmo interesse em um jogo online chamado Rose
                Online. A curiosidade despertada naquele momento me levou a
                mergulhar mais fundo no assunto, e foi assim que minha paixão
                pelo desenvolvimento web nasceu.
                <br />
                Desde então, tenho dedicado meu tempo e energia ao aprendizado
                contínuo, explorando diversas linguagens e tecnologias. Minha
                principal stack é o <span className="text-white">JavaScript</span> para o desenvolvimento frontend,
                onde posso dar vida às minhas ideias e criar experiências
                interativas e dinâmicas para os usuários. No entanto, meu
                conhecimento não se limita apenas ao Javascript; também possuo
                habilidades sólidas em outras linguagens, como <span className="text-white">Python</span>, e estou
                familiarizado com uma variedade de ferramentas do ecossistema
                JavaScript, incluindo bibliotecas e frameworks.
                <br />
                <span className="text-white">Estou constantemente buscando novos desafios e oportunidades
                para expandir meu conhecimento e aprimorar minhas habilidades. </span>
                Sou apaixonado por criar soluções inovadoras e funcionais que
                tenham um impacto positivo na vida das pessoas.
              </p>
            </div>
          </BoxScroll>
          <BoxScroll>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-emerald-300">
                Habilidades
              </h2>
              <p className="text-slate-400/80">
                <span className="text-white">Com um forte domínio do JavaScript, sou capaz de criar interfaces dinâmicas e interativas para aplicativos da web.</span> Minha experiência inclui o uso de bibliotecas e frameworks populares, como React.js e NextJS.
              </p>
              <br />
              <span className="text-slate-400/80">
              Abaixo algumas das tecnologias que possuo um bom domínio: 
              </span>
              <SkillsBar />
            </div>
          </BoxScroll>
          <BoxScroll>
            <div className="mt-5 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-emerald-300">
                Projetos
              </h2>
              <CardProjects
                imagem="/assets/stack-burguer.jpg"
                titulo="Stack Burguer"
                description="A ideia desse projeto é consumir uma lista de itens em um restaurante, adicionar esses itens ao carrinho de compras e calcular o valor total dos pedidos."
                url="https://stack-burguer-project.vercel.app/"
              />
              <CardProjects
                imagem="/assets/next-movies.jpg"
                titulo="NextMovies"
                description="Esse projeto tem como ideia trazer uma serie de informações de filmes e series, como se fosse um streaming de videos, foi utilizada a Api do theMovieDB."
                url="https://nextmovies-project.vercel.app/"
              />
              <CardProjects
                imagem="/assets/techBooks.jpg"
                titulo="TechBooks"
                description="Nesse projeto foi criado um site, que lista alguns livros de tecnologia, utilizando a API de livros do google."
                url="https://techinbooks.vercel.app/"
              />
              <CardProjects
                imagem="/assets/star-wars.jpg"
                titulo="Star Wars - Cronologia"
                description="Projeto inspirado nos filmes star wars, mostrando a ordem correta para se assistir aos filmes."
                url="https://joaoleandroo.github.io/page-star_wars-ordem_cronologica/"
              />
              <CardProjects
                imagem="/assets/cristiano-ronaldo.jpg"
                titulo="Cristiano Ronaldo"
                description="Dentro desse projeto, é mostrada um pouco a história do lendário jogador de futebol Cristiano Ronaldo."
                url="https://joaoleandroo.github.io/cristiano_ronaldo_page/"
              />
              <CardProjects
                imagem="/assets/memory-game.jpg"
                titulo="Jogo da memória"
                description="Jogo da memória com cartas dos personagens do anime one piece, a cada rodada novas cartas são adicionadas aleatoriamente."
                url="https://memory-game-six-rho.vercel.app/"
              />
              <CardProjects
                imagem="/assets/game-pikachu.jpg"
                titulo="Game Pikachu"
                description="Joguinho do pikachu, visa fugir da pokebola. Para jogar, basta pressionar qualquer tecla."
                url="https://joaoleandroo.github.io/game-pikachu/"
              />
              <CardProjects
                imagem="/assets/buscador-cep.jpg"
                titulo="Buscador CEP"
                description="Dentro desse projeto é consumida uma API de CEP, basta digitar o CEP corretamente e será retornado um resultado."
                url="https://buscador-cep-react-six.vercel.app/"
              />
              <CardProjects
                imagem="/assets/luffy-gear-five.jpg"
                titulo="Luffy Gear Five"
                description="Projeto feito para demonstrar a grandiosidade da transformação do gear five, do personagem Luffy do anime One piece."
                url="https://joaoleandroo.github.io/luffy-gear-five/"
              />
              <CardProjects
                imagem="/assets/save-websites.jpg"
                titulo="Save websites"
                description="Esse projeto foi inspirado no modo do google de salvar o link dos websites favoritos"
                url="https://add-links-websites.vercel.app/"
              />
              <CardProjects
                imagem="/assets/lista-tarefas.jpg"
                titulo="Lista de Tarefas"
                description="Lista de tarefas com todos os requisitos de um CRUD, criar, ler, atualizar e deletar uma tarefa. Também foi utilizado o salvamento do localstorage."
                url="https://joaoleandroo.github.io/task-list/"
              />
              <CardProjects
                imagem="/assets/projeto-music.jpg"
                titulo="Projeto Musica"
                description="Projeto de musica landing page"
                url="https://joaoleandroo.github.io/project-music/"
              />
            </div>
          </BoxScroll>

          <Footer />
        </div>
      </div>
    </Container>
  );
}
