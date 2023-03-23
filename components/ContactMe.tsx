import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { PageInfo, Social } from "../typings";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = { pageInfo: PageInfo };

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    window.location.href = `mailto:damianalcalayy@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:mt-10 pt-20 mt-[-100px]">
      <h3 className="absolute top-32 md:top-32  uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <motion.div
        className="flex flex-col space-y-10 items-center justify-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-2xl md:text-4xl max-w-[300px] font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline underline-offset-4">
            Let's Talk.
          </span>
        </h4>
        <img
          src="/damian-fondo.png"
          alt="Damian Pic"
          className="relative rounded-full mx-auto object-cover w-36 h-36"
        />

        <div className="space-y-4">
          <Link
            href="https://www.linkedin.com/in/dami%C3%A1n-alcalay/"
            target="_blank"
          >
            <div className="flex items-center space-x-5 justify-center">
              <img src="/linkedin-logo.png" className="w-8 h-8" />
              <p className="text-lg md:text-2xl">Damián Alcalay López</p>
            </div>
          </Link>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#1a88bb] h-8 w-8" />
            <p className="text-lg md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactMe;
