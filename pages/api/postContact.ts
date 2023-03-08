// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from "../../sanity";
import { FormValues } from "../../typings";

type Data = {
  formValues: FormValues;
};

export default async function handler({ formValues }: Data) {
  const result = await sanityClient.create(formValues);
  return result;
}
