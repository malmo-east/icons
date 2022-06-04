import * as React from "react";
import { SVGProps } from "react";

const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="question_svg__fa-primary"
      d="M204.3 32.01H96c-52.94 0-96 43.06-96 96 0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3c28.5 0 51.7 23.19 51.7 51.79 0 19.72-10.97 37.47-30.5 47.33l-97.7 57.27c-10.7 5.8-15.8 16.3-15.8 27.6v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99v-21.7l80-47c39.47-19.75 64-59.42 64-103.5 0-63.85-51.9-115.79-115.7-115.79z"
    />
    <path
      d="M144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1 40-17.9 40-39.1-17.9-40-40-40z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgQuestion;
