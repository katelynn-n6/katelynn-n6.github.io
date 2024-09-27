export default function Projects() {
  return (
    <div>
      <div className="font-crimson text-black text-center m-20 mb-28">
        <h1 className="tracking-tightish my-20">Projects</h1>
        <div className="flex mx-60 mb-16">
          <div className="min-w-44 max-w-44 mx-16">
            <a rel="noopener noreferrer" href="https://tekkanji.up.railway.app">
              <img src="/tekkanji.png"></img>
            </a>
          </div>
          <div className="leading-8">
            <div className="text-3xl text-left">
              <b>Tekkanji</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>JavaScript · React · Express · Node</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                A full-stack web application for students to learn and review
                the 322 kanji characters introduced by JAPN 1001-3001 at Georgia
                Tech, now used by the Japanese department.
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
              <b>Spotify Jukebox</b>
            </div>
            <div className="text-2halfxl text-left">
              <p> React · Next · AWS · Node · DynamoDB</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                A full-stack web application for users to use “virtual
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
              <b>Wild West Rising</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>Java · Android Studio</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                A tower-defense Android video game. Placed 3rd among class
                competition for CS 2340: Objects & Design.
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
              <b>The Plight of the Piping Plover</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>HTML · CSS · Bootstrap</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                An educational video game about climate change and species
                extinction. Developed during TechTogether Atlanta 2022.
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
              <b>Paper Planes</b>
            </div>
            <div className="text-2halfxl text-left">
              <p>C# · Unity</p>
            </div>
            <div className="mt-5 text-1halfxl text-left">
              <p className="leading-7 mb-3">
                2D sidescroller platformer video game about a wind goddess
                rediscovering life through paper plane messages. VGDev Spring
                '22.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
