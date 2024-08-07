import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const socials = [{ icon: <FaLinkedinIn />, path: "" }];
const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index}>
            <span className={iconStyles}>{social.icon} </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
