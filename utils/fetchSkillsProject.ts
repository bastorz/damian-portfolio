import { SkillProject } from "../typings";

export const fetchSkillsProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillProject`
  );
  const data = await res.json();
  const skillProjects: SkillProject[] = data.skillProjects;

  return skillProjects;
};
