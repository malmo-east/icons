import * as React from "react";
import { SVGProps } from "react";

const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="paper-plane_svg__fa-primary"
      d="M416 96 198.7 375.3c-4.3 4.8-6.7 12.6-6.7 18.8l-.9 117.9-68.8-151.7L416 96z"
    />
    <path
      d="m511.6 36.86-64 415.1a32.008 32.008 0 0 1-31.65 27.147c-4.188 0-8.319-.815-12.29-2.472l-122.6-51.1L191.1 512l.9-117.9c0-7.115 2.372-14.03 6.742-19.64L416 96 122.3 360.3 19.69 317.5C8.438 312.8.812 302.2.062 289.1s5.47-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPaperPlane;
