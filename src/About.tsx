export default function About() {
  return (
    <>
      <div className="flex mb-24">
        <div className="font-crimson text-black text-left m-20 ml-36">
          <h1 className="mb-10">hello there!</h1>
          <div className="text-2halfxl tracking-tightish leading-8">
            <p className="mb-5">i'm katelynn, and i am a software engineer.</p>
            <p className="mb-5">
              i am a graduating 4th-year computer science student at the{" "}
              <a className="text-black underline" href="https://gatech.edu">
                georgia institute of technology
              </a>
              , specializing in people (human computer interaction, ui/ux
              design) and media (computer graphics).
            </p>
            <p className="mb-5">
              through my{" "}
              <a href="/resume" className="text-black underline">
                full-time internship experiences
              </a>
              , my{" "}
              <a href="/projects" className="text-black underline">
                personal projects
              </a>
              , and my coursework, i have acquired a passion for frontend and
              full-stack software development.
            </p>
            <p>
              in my free time, i enjoy listening to music, language-learning
              (japanese currently), watching horror movies, traveling, and
              playing{` `}
              <a
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nytimes.com/crosswords">
                the new york times mini games
              </a>
              .
            </p>
          </div>
        </div>
        <div className="align-middle max-w-screen-lg my-auto ml-0 mr-36">
          <img src="/about_pic.jpg" />
        </div>
      </div>
    </>
  );
}
