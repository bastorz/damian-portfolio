import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import {
  Experience,
  FormValues,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../typings";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import BackToTopButton from "../components/BackToTopButton";
import { fetchPostContact } from "../utils/fetchPostContact";

interface Props {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  // formValues: FormValues[];
}

const Home: NextPage<Props> = ({
  pageInfo,
  experience,
  skills,
  projects,
  socials,
  // formValues,
}) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header socials={socials} />
        <section id="hero" className="snap-center">
          <div>
            <Hero pageInfo={pageInfo} />
          </div>
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experience={experience} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <BackToTopButton />
          </footer>
        </Link>
      </main>
    </div>
  );
};

export default Home;

// Backend Code
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const experience: Experience[] = await fetchExperience();
  // const formValues: FormValues[] = await fetchPostContact();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      socials,
      experience,
      // formValues,
    },

    revalidate: 10,
  };
};
