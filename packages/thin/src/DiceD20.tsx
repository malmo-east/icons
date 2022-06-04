import * as React from "react";
import { SVGProps } from "react";

const SvgDiceD20 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M463.9 116.1 271.9 4.2C267.8 1.875 260.7 0 255.1 0s-10.9 1.875-15 4.25l-192 111.9C38.16 121.9 32 132.8 32 144.5v223c0 11.69 6.156 22.54 16.12 28.36l192 111.9C244.2 510.1 251.3 512 256 512s11.81-1.875 15.88-4.25l192-111.9C473.8 390.1 480 379.2 480 367.5v-223c0-11.7-6.2-22.6-16.1-28.4zM256 384.8 142.3 200h227.4L256 384.8zm-207.84-241 69.75 50.72L48 340.7V144.5c0-.3.16-.4.16-.7zM278.9 26.91l176.9 103-69.86 50.82L278.9 26.91zM368.7 184H143.3L256 22l112.7 162zm-242.5-3.2-69.96-50.9 176.9-103L126.2 180.8zM51.7 370.1l77.12-161.5 111.8 181.7L51.7 370.1zm331.4-161.4 77.17 161.4-188.9 20.24L383.1 208.7zm11-14.1 69.75-50.72c-.05.22.15.32.15.62v196.3l-69.9-146.2zM65.86 387.7 248 407.2v86.56L65.86 387.7zM264 493.8v-86.56l182.1-19.52L264 493.8z" />
  </svg>
);

export default SvgDiceD20;
