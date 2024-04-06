import Contacts from "./Contacts";

const MyInfos = () => {
    return ( 
        <section className="lg:fixed relative h-full border-l-2 border-slate-600 border-r-2">
          <div className="py-20 px-8 flex flex-col gap-y-4 lg:items-start lg:justify-left items-left justify-left xs:justify-center xs:items-center">
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
     );
}
 
export default MyInfos;