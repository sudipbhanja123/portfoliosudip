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
          I am Sudip Bhanja, a passionate Full Stack Developer with a strong
          foundation in web application development and frontend technologies.
          My journey into the world of tech began during my education at the
          Panskura Banamali College and Vellore Institute of Technology, where I
          pursued my degrees in BCA and MCA, respectively.
          <br />
          <br />
          My fascination with creating impactful digital experiences started
          early. From developing custom projects like the Flower e-commerce Site
          using ASP .NET and Tailwind CSS, to contributing as a Frontend
          Developer Intern at Sustally Technologies Pvt. Ltd., I have thrived on
          pushing the boundaries of whats possible in web development.
          <br />
          <br />
          I am adept at a range of technologies, from React and Next.js to
          frameworks like Tailwind CSS and Bootstrap. My approach combines
          strong problem-solving skills with a knack for collaborative teamwork,
          evident in projects like the Caring Crowd Web Application, where I
          leveraged HTML, CSS, JavaScript, and Tailwind CSS to create a platform
          benefiting various charitable causes.
          <br />
          <br />
          Currently focused on honing my skills in both frontend and backend
          development, I aspire to continue creating innovative and efficient
          web solutions that make a difference. Beyond coding, I enjoy exploring
          new technologies, playing sports like cricket, and staying inspired
          through continuous learning.
        </p>
      </Reveal>
    </section>
  );
}
