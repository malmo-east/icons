import * as React from "react";
import { SVGProps } from "react";

const SvgCloudSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="cloud-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M138.6 83.31C167.8 51.75 209.6 32 255.1 32c60.2 0 111.9 32.25 139.6 80.2C409.9 101.1 428.3 96 448 96c53 0 96 42.1 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 36.6-15.4 69.6-40.9 92.1L138.6 83.31zM97.17 172.6 487.4 480H143.1C64.47 480-.001 415.5-.001 336c0-62.8 40.171-116.2 96.201-135.9-.13-2.7-1.1-5.4-1.1-8.1 0-6.6 1.3-13.1 2.07-19.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCloudSlash;
