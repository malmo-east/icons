import * as React from "react";
import { SVGProps } from "react";

const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="microphone_svg__fa-primary"
      d="M192 352c53.03 0 96-42.97 96-96V96c0-53.03-42.97-96-96-96S96 42.97 96 96v160c0 53 42.1 96 96 96z"
    />
    <path
      d="M368 215.1V256c0 88.91-66.28 162.5-152 174.2V464h40c18.2 0 32.84 15.19 31.96 33.57C287.6 505.8 280.2 512 272 512H112c-8.222 0-15.57-6.216-15.96-14.43C95.16 479.2 109.8 464 128 464h40v-34.15C79.97 417.7 16 337.8 16 248.1v-33c0-12.4 10.75-23.1 24-23.1s24 10.7 24 23.1l-.9 35.8c0 66.21 53.66 128.6 119.7 132.8C258 388.4 320 329.3 320 256v-40.9c0-12.4 10.7-23.1 24-23.1s24 10.7 24 23.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMicrophone;
