import { Reveal } from "./custom/reveal";

export default function About() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
      <h2
        id="about"
        className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
      >
        About Me
      </h2>
      <Reveal
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4 },
        }}
      >
        <p className="leading-7 text-justify">
          I am Sudip Bhanja, a Full Stack Developer interested in building
          useful, reliable web applications. I studied BCA at Panskura Banamali
          College and MCA at Vellore Institute of Technology, where I built a
          strong foundation in software development.
          <br />
          <br />
          I have worked across frontend and backend development. At Tata
          Consultancy Services, I contributed to a B2B inventory ordering
          platform for UK retailers, developing store and admin features with
          ASP.NET Core MVC and C# and working with SQL Server data. Earlier, as
          a Frontend Developer Intern at Sustally Technologies, I helped build
          web experiences and migrate a company website from React to Next.js.
          <br />
          <br />
          My toolkit includes React, Next.js, Tailwind CSS, ASP.NET Core MVC,
          C#, and SQL Server. I enjoy solving problems, working with a team, and
          turning requirements into practical features. My projects include a
          Flower e-commerce site and the Caring Crowd web application, a
          platform supporting charitable causes.
          <br />
          <br />
          I continue to grow across frontend and backend development and aim to
          create efficient solutions that make a difference. Outside of coding,
          I enjoy exploring new technologies, playing cricket, and learning.
        </p>
      </Reveal>
    </section>
  );
}
