import { FormValues } from "../typings";

interface Props {
  formData: FormValues;
}

export const fetchPostContact = async ({}) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postContact`);
};
