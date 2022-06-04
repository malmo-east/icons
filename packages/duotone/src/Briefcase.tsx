import * as React from "react";
import { SVGProps } from "react";

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="briefcase_svg__fa-primary"
      d="M464 96h-80V48c0-25.59-22.4-48-48-48H176c-25.6 0-48 22.41-48 48v48H48c-25.59 0-48 22.4-48 48v144h512V144c0-25.6-22.4-48-48-48zm-128 0H176V48h160v48z"
    />
    <path
      d="M320 336c0 8.844-7.156 16-16 16h-96c-8.8 0-16-7.2-16-16v-48H0v144c0 25.6 22.41 48 48 48h416c25.59 0 48-22.41 48-48V288H320v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBriefcase;
