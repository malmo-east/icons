import * as React from "react";
import { SVGProps } from "react";

const SvgPlaneUpSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="plane-up-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M245.4 167.1 256 160V93.68C256 59.53 285 0 320 0c36 0 64 59.53 64 93.68V160l177.8 118.5c8.9 5.9 14.2 15.9 14.2 26.6v56.7c0 10.9-10.7 18.6-21.1 14.3l-72.5-23.3-237-185.7zm-84.1 56 284.6 224.2c1.4 2.4 2.1 5.1 2.1 8v41.8c0 8.6-6.3 14.9-14.9 14.9-.4 0-1.7-.2-3-.5L320 480l-110.1 31.5c-1.3.3-2.6.5-3.9.5-7.7 0-14-6.3-14-14.9V456c0-5.9 2.4-9.8 6.4-12.8L256 400v-80L85.06 376.1C74.7 380.4 64 372.7 64 361.8v-56.7c0-10.7 5.35-20.7 14.25-26.6l83.05-55.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlaneUpSlash;
