import Container from "@/components/Container";
import BoxScroll from "@/components/BoxScroll";
import Contacts from "@/components/Contacts";

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

        <Contacts/>
        </section>

        <div className="flex flex-col items-end lg:absolute relative top-0 right-0 w-full lg:w-1/2">
          <BoxScroll>
            <div className="flex flex-col gap-y-5 py-20">
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
        </div>
      </div>
    </Container>
  );
}
