import * as React from "react";
import { SVGProps } from "react";

const SvgCardsBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="cards-blank_svg__fa-primary"
      d="M7.468 194.9c-15.374-26.7-6.25-60.7 20.382-76.1L220.7 7.468c26.6-15.374 60.7-6.25 76.1 20.382l167 289.25c15.3 26.7 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.6 6.3-76-20.3L7.468 194.9z"
    />
    <path
      d="m324.1 499 135.3-78.1c41.9-24.2 56.3-77.8 32.1-119.8L354.7 64.25c1.8-.17 3.5-.25 5.3-.25h224c30.9 0 56 25.07 56 56v336c0 30.9-25.1 56-56 56H360c-13.6 0-26.2-4.9-35.9-13z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCardsBlank;
