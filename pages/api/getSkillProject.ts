// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { SkillProject } from "../../typings";

const query = groq`
*[_type == "skillProject"]
`;

type Data = {
  skillProjects: SkillProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skillProjects: SkillProject[] = await sanityClient.fetch(query);
  res.status(200).json({ skillProjects });
}
