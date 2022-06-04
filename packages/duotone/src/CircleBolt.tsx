import * as React from "react";
import { SVGProps } from "react";

const SvgCircleBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-bolt_svg__fa-primary"
      d="M280.3 240H344c6.8 0 12.8 4.2 15.1 10.6 2.2 5.5.3 13.5-4.9 17.8l-136 112c-5.7 4.6-13.9 4.8-19.8.4-5.9-4.4-8-12.3-5.1-19.1l38.4-90.6H168c-6.8 0-12.8-3.3-15.1-9.7-2.2-6.4-.3-13.5 4.9-17.8l136-112c5.7-5.5 13.9-4.8 19.8-.4 5.9 4.4 8 12.3 5.1 19.1L280.3 240z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm293.8-124.4-136 112c-5.2 4.3-7.1 11.4-4.9 17.8 2.3 6.4 8.3 9.7 15.1 9.7h63.7l-38.4 90.6c-2.9 6.8-.8 14.7 5.1 19.1 5.9 4.4 14.1 4.2 19.8-.4l136-112c5.2-4.3 7.1-12.3 4.9-17.8-2.3-6.4-8.3-10.6-15.1-10.6h-63.7l38.4-89.7c2.9-6.8.8-14.7-5.1-19.1-5.9-4.4-14.1-5.1-19.8.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleBolt;
