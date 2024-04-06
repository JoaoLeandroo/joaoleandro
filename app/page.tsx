import Container from "@/components/Container";
import BoxScroll from "@/components/BoxScroll";
import Contacts from "@/components/Contacts";
import SkillsBar from "@/components/SkillsBar";
import CardProjects from "@/components/CardProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col relative min-h-screen">
        <section className="lg:fixed relative h-full border-l-2 border-slate-600 border-r-2">
          <div className="py-20 px-8 flex flex-col gap-y-4 lg:items-start lg:justify-left items-center justify-center">
            <h1 className="text-5xl font-bold drop-shadow-xl text-slate-300">
              João Leandro
            </h1>
            <p className="text-xl font-medium">Junior Frontend Engineer</p>
            <p className="text-md text-slate-400 font-medium">
              Eu construo experiências digitais <br /> perfeitas, envolventes e
              acessíveis.
            </p>
          </div>

          <Contacts />
        </section>

        <div className="flex flex-col items-end lg:absolute relative top-0 right-0 w-full lg:w-1/2">
          <BoxScroll>
            <div className="flex flex-col gap-y-5 lg:pt-20 pt-16">
              <h2 className="text-2xl font-semibold text-emerald-300">Sobre</h2>
              <p className="text-slate-400/80">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br />
              </p>
            </div>
          </BoxScroll>
          <BoxScroll>
            <div className="mt-5">
              <h2 className="text-2xl font-semibold text-emerald-300">
                Habilidades
              </h2>
              <p className="text-slate-400/80">Breve resumo...</p>
              <SkillsBar />
            </div>
          </BoxScroll>
          <BoxScroll>
            <div className="mt-5 flex flex-col gap-8">
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
                imagem="/assets/one-piece-live-action.jpg"
                titulo="One piece - Liveaction"
                description="Projeto inspirado no lançamento do liveaction do anime One Piece."
                url="https://one-piece-liveaction-7gtpptsyu-joaoleandroo.vercel.app/"
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
                imagem="/assets/prime-flix.jpg"
                titulo="Prime Flix"
                description="Dentro desse projeto é consumida uma API de filmes, onde é possível salvar os filmes favoritos e visualizar os filmes em cartaz no cinema."
                url="https://jl-movies.netlify.app/"
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
