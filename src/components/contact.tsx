import Link from "next/link";
import { Reveal } from "./custom/reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24"
    >
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        Get In Touch
      </h2>
      <Reveal
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        <p className="leading-7">
          If you would like to contact me, please reach out via LinkedIn or
          email, and I will respond as soon as possible.
        </p>
      </Reveal>
      <div className="flex gap-4">
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.1 },
          }}
        >
          <Link href="mailto:sudipbhanja5g@gmail.com" target="_blank">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Say Hi!
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
