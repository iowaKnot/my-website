import { GithubUser } from "../components/GithubUser";


export const Home = () => {
  return (
    <div className="bg-slate-200 font-serif">
      <h1 className="flex justify-center font-bold text-5xl p-5 text-slate-800">
        Welcome to my website
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-5 p-10">
          <div className="w-max rounded overflow-hidden shadow-lg bg-slate-100 p-2">
            <p className="font-bold text-slate-800 text-3xl">Who am I</p>
            <br />
            <p className="font-semibold text-slate-700 text-md">
              My name is Tommaso Merli and i am a junior full-stack developer.
              <br />
              I pursued a specialized academic path and graduated from the
              <br />
              National Avio School in Milan, which is a Technical Institute for
              <br />
              Transportation. My studies included subjects such as: Air
              <br />
              Navigation Aircraft, Operation Flight, Mechanics, Flight Control
            </p>
          </div>
          <GithubUser />
          <div className="w-max rounded overflow-hidden shadow-lg bg-slate-100 p-2">
            <p className="font-bold text-slate-800 text-3xl mb-12">My tools</p>
            <div className="flex flex-wrap gap-4">
              <img className="w-10 h-10" src="src/assets/html.png" />
              <img className="w-10 h-10" src="src/assets/tailwindcss.png" />
              <img className="w-10 h-10" src="src/assets/javascript.png" />
              <img className="w-10 h-10" src="src/assets/react.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
