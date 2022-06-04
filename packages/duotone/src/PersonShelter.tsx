import * as React from "react";
import { SVGProps } from "react";

const SvgPersonShelter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="person-shelter_svg__fa-primary"
      d="M240.1 4.216c9-5.621 21.9-5.621 31.8 0l224 127.984c9.9 5.7 16.1 16.3 16.1 27.8v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V178.6L256 68.86 64 178.6V480c0 17.7-14.33 32-32 32S0 497.7 0 480V160c0-11.5 6.153-22.1 16.12-27.8L240.1 4.216z"
    />
    <path
      d="M296 168c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm-72 344c-13.3 0-24-10.7-24-24V313.5l-26.9 49.9c-6.3 11.6-20.8 16-32.5 9.7-12.5-6.3-16-20.8-9.7-32.5l37.8-70.3c15.4-28.5 45.2-46.3 77.5-46.3h19.6c32.3 0 62.1 17.8 77.5 46.3l37.8 70.3c6.3 11.7 1.9 26.2-9.7 32.5-11.7 6.3-26.2 1.9-32.5-9.7L312 313.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-16v88c0 13.3-10.7 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonShelter;