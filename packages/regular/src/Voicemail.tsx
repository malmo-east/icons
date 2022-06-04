import * as React from "react";
import { SVGProps } from "react";

const SvgVoicemail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M495.1 96C416.5 96 352 160.5 352 240c0 37 14.38 70.5 37.38 96h-138.8C273.6 310.5 288 277 288 240c0-79.5-64.5-144-144-144S0 160.5 0 240s64.49 144 143.1 144h352c80.4 0 144.9-64.5 144.9-144S575.5 96 495.1 96zM48 240c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zm448 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
  </svg>
);

export default SvgVoicemail;
