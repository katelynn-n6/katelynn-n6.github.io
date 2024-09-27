export default function About() {
  return (
    <>
      <div className="flex mb-24">
        <div className="font-crimson text-black text-left m-20 ml-36">
          <h1 className="mb-10">Hello there!</h1>
          <div className="text-2halfxl tracking-tightish leading-8">
            <p className="mb-5">I'm Katelynn, and I am a software engineer.</p>
            <p className="mb-5">
              I am a graduating 4th-year Computer Science student at the{" "}
              <a className="text-black underline" href="https://gatech.edu">
                Georgia Institute of Technology
              </a>
              , specializing in people (human computer interaction, ui/ux
              design) and media (computer graphics).
            </p>
            <p className="mb-5">
              Through my{" "}
              <a href="#/resume" className="text-black underline">
                full-time internship experiences
              </a>
              , my{" "}
              <a href="#/projects" className="text-black underline">
                personal projects
              </a>
              , and my coursework, I have acquired a passion for frontend and
              full-stack software development.
            </p>
            <p>
              In my free time, I enjoy listening to music, language-learning
              (Japanese currently), watching horror movies, traveling, and
              playing{` `}
              <a
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nytimes.com/crosswords">
                the New York Times mini games
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
