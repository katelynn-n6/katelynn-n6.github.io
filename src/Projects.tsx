export default function Projects() {
  return (
    <div>
      <div className="font-crimson text-black text-center m-20 mb-28">
        <h1 className="tracking-tightish my-20">projects</h1>
        <div className="flex mx-60 mb-16">
          <div className="min-w-44 max-w-44 mx-16">
            <a rel="noopener noreferrer" href="https://tekkanji.up.railway.app">
              <img src="/tekkanji.png"></img>
            </a>
          </div>
          <div className="leading-8">
            <div className="text-3xl text-left">
              <b>tekkanji</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>javascript · react · express · node</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                a full-stack web application for students to learn and review
                the 322 kanji characters introduced by japn 1001-3001 at georgia
                tech, now used by the japanese department.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-60 mb-16">
          <div className="min-w-44 max-w-44 mx-16">
            <a rel="noopener noreferrer" href="https://rocola.it">
              <img src="/spotbox.png"></img>
            </a>
          </div>
          <div className="leading-8">
            <div className="text-3xl text-left">
              <b>spotify jukebox</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>javascript · react · next · aws · node · dynamodb</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                a full-stack web application for users to use “virtual
                jukeboxes” to select songs in a host's queue through voting,
                offering a more collaborating and engaging music experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-60 mb-16">
          <div className="min-w-44 max-w-44 mx-16">
            <a
              rel="noopener noreferrer"
              href="https://youtu.be/h2aPmB0_HTw?si=vI5nxwsBIBdEyDho">
              <img src="/wwr.png"></img>
            </a>
          </div>
          <div className="leading-8">
            <div className="text-3xl text-left">
              <b>wild west rising</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>java · android studio</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                a tower-defense android video game. placed 3rd among class
                competition for cs 2340: objects & design.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-60 mb-16">
          <div className="min-w-44 max-w-44 mx-16">
            <a
              rel="noopener noreferrer"
              href="https://devpost.com/software/the-piping-plover-migrationt">
              <img src="/plover.png"></img>
            </a>
          </div>
          <div className="leading-8">
            <div className="text-3xl text-left">
              <b>the plight of the piping plover</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>html · css · bootstrap</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                an educational video game about climate change and species
                extinction. developed during techtogether atlanta 2022.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-60 mb-16">
          <div className="min-w-44 max-w-44 mx-16">
            <a
              rel="noopener noreferrer"
              href="https://allisanlu.itch.io/paper-planes">
              <img src="/paperplanes.png"></img>
            </a>
          </div>
          <div className="leading-8">
            <div className="text-3xl text-left">
              <b>paper planes</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>c# · unity</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                2d sidescroller platformer video game about a wind goddess
                rediscovering life through paper plane messages. vgdev spring
                '22.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
