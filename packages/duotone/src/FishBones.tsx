import * as React from "react";
import { SVGProps } from "react";

const SvgFishBones = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="fish-bones_svg__fa-primary"
      d="M472 256c0 13.26-10.75 24.01-24 24.01l-71.1-.012v72c0 13.26-10.75 24-24 24s-24-10.74-24-24v-72h-48v72c0 13.26-10.75 24-23.1 24s-24-10.74-24-24v-72h-48v72c0 13.26-10.75 24-23.1 24s-24-10.74-24-24v-72L88 280c-13.25 0-24-10.7-24-24 0-13.26 10.75-24.01 24-24.01l48 .01v-72c0-13.26 10.75-24 24-24s23.1 10.74 23.1 24v72h48v-72c0-13.26 10.75-24 24-24s23.1 10.74 23.1 24v72h48v-72c0-13.26 10.75-24 24-24s24 10.74 24 24v72l73.8-.9c13.3 0 24 11.6 24 24.9z"
    />
    <path
      d="M27.56 100.7C15.41 88.65-2.7 101.38.33 119.66L28.8 256 .34 392.3c-3.037 18.28 15.08 31.01 27.11 19.09l58.1-52.92A31.985 31.985 0 0 0 96 334.82V279.1h-8c-13.25 0-24-9.9-24-23.1s10.75-23.1 24-23.1h8v-55.7c0-9.011-3.799-17.6-10.46-23.67L27.56 100.7zm412.84-2.47c-10.78-6.222-24.36 1.268-24.36 13.67V232l32-.013c13.25 0 24 10.75 24 23.1s-10.75 23.1-24 23.1l-32-.011L416 400.1c0 12.4 13.59 19.89 24.36 13.67C520.8 367.3 576 285.1 576 256c0-29.1-55.2-111.3-135.6-157.77z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFishBones;