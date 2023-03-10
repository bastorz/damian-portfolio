import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import BackToTopButton from "../components/BackToTopButton";
import dynamic from "next/dynamic";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

interface Props {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  const Hero = dynamic(() => import("../components/Hero"), {
    ssr: false,
  });
  const About = dynamic(() => import("../components/About"), {
    ssr: false,
  });
  const WorkExperience = dynamic(() => import("../components/WorkExperience"), {
    ssr: false,
  });
  const Projects = dynamic(() => import("../components/Projects"), {
    ssr: false,
  });
  const Skills = dynamic(() => import("../components/Skills"), {
    ssr: false,
  });
  const ContactMe = dynamic(() => import("../components/ContactMe"), {
    ssr: false,
  });

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Damian - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="xl:snap-center snap-none">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="xl:snap-center snap-none">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="xl:snap-center snap-none">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="xl:snap-center snap-none">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="xl:snap-center snap-none">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="xl:snap-center snap-none">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-4 w-10 ml-[1670px] rounded-md bg-black hidden xl:flex opacity-60 hover:opacity-100 duration-200">
        <BackToTopButton />
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};

export default Home;
