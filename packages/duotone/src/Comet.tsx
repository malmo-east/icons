import * as React from "react";
import { SVGProps } from "react";

const SvgComet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="comet_svg__fa-primary"
      d="m315.4 300.3-50.63 49.38 11.88 69.63c1 5.75-1.375 11.63-6 15-4.75 3.375-11 3.875-16.13 1.125l-62.5-32.88-62.63 32.88c-11 6-24.25-3.5-22.13-16.13l12-69.63L68.6 300.3c-4.13-4.1-5.63-10.1-3.88-15.7 1.75-5.5 6.625-9.625 12.38-10.38l69.88-10.25 31.25-63.5c2.47-5.17 7.87-9.37 12.87-9.37 5.75 0 11.13 3.375 13.63 8.5l31.38 63.5 69.75 10.25c5.875.875 10.63 4.875 12.38 10.38 1.86 6.37 1.26 12.47-2.84 16.57z"
    />
    <path
      d="M491.1.716c-38.75 11.5-111.8 34.25-187.6 61.25-2.125-7-4-13.5-5.625-18.63-1.375-4.5-4.75-8.25-9.25-10.13-4.375-1.875-9.375-1.625-13.63.625C232.5 55.97 122.1 116.5 60.59 176.3c-1.125 1-2.5 2-3.5 3-76.13 76.13-76.13 199.5 0 275.6 76 76.13 199.5 76 275.5-.125 1-1 2-2.375 3-3.5 59.88-61.63 120.4-172.1 142.5-214.4 2.25-4.25 2.5-9.25.625-13.75-1.75-4.375-5.5-7.75-10.13-9.125-5.25-1.625-11.63-3.5-18.63-5.625 27-76 49.75-149 61.38-187.8 1.625-5.625.125-11.88-4.125-16C502.1.466 496.9-1.034 491.1.716zM315.4 300.3l-50.63 49.38 11.88 69.63c1 5.75-1.375 11.63-6 15-4.75 3.375-11 3.875-16.13 1.125l-62.5-32.88-62.63 32.88c-11 6-24.25-3.5-22.13-16.13l12-69.63L68.6 300.3c-4.13-4.1-5.63-10.1-3.88-15.7 1.75-5.5 6.625-9.625 12.38-10.38l69.88-10.25 31.25-63.5c2.5-5.125 7.875-8.5 13.75-8.5 5.75 0 11.13 3.375 13.63 8.5l31.38 63.5 69.75 10.25c5.875.875 10.63 4.875 12.38 10.38.98 5.5.38 11.6-3.72 15.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgComet;
