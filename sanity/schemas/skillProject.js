export default {
  name: "skillProject",
  title: "SkillProject",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Skill",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
