import * as React from "react";
import { SVGProps } from "react";

const SvgUserDoctor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user-doctor_svg__fa-primary"
      d="M279.1 304c3.6 0 6.2.1 8 .2V362c-26.7 7.1-48 32.2-48 62v24c0 4.2 2.6 8.3 5.6 11.3l16 16c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-12.2-11.3V424c0-17.7 15.2-32 32-32 18.6 0 32.9 14.3 32.9 32v17.4l-11.3 11.3c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l16-16c3-3 4.7-7.1 4.7-11.3v-24c0-29.8-20.4-54.9-48-62v-53.2c73.5 17.9 128 83.3 128 163.2v8c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-8c0-79 54.53-145.3 128-163.2v61.5c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7v-66.1c2.7-.1 5.3-.2 8-.2h111.1zm-160 120c0-13.3 11.6-24 24-24 14.2 0 24 10.7 24 24s-9.8 24-24 24c-12.4 0-24-10.7-24-24z"
    />
    <path
      d="M96 128C96 57.31 153.3 0 224 0s128 57.31 128 128c0 70.7-57.3 128-128 128S96 198.7 96 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserDoctor;
