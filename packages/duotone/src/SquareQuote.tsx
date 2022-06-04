import * as React from "react";
import { SVGProps } from "react";

const SvgSquareQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-quote_svg__fa-primary"
      d="M152 160c-30.9 0-56 25.1-56 56s25.1 56 56 56c2.7 0 5.4-.4 8-.8v8.8c0 13.2-10.8 24-24 24-13.25 0-24 10.75-24 24s10.8 24 24 24c39.7 0 72-32.3 72-72v-64c0-30.9-25.1-56-56-56zm144 0c-30.93 0-56 25.07-56 56s25.07 56 56 56c2.74 0 5.365-.426 8-.807V280c0 13.23-10.77 24-24 24-13.2 0-24 10.8-24 24s10.8 24 24 24c39.7 0 72-32.3 72-72v-64c0-30.9-25.1-56-56-56z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM208 280c0 39.7-32.3 72-72 72-13.25 0-24-10.75-24-24s10.8-24 24-24 24-10.8 24-24v-8.8c-2.6.4-5.3.8-8 .8-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56v64zm144 0c0 39.7-32.3 72-72 72-13.2 0-24-10.7-24-24s10.75-24 24-24c13.23 0 24-10.77 24-24v-8.8c-2.6.4-5.3.8-8 .8-30.93 0-56-25.07-56-56s25.1-56 56-56 56 25.1 56 56v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareQuote;
