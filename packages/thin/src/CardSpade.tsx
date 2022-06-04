import * as React from "react";
import { SVGProps } from "react";

const SvgCardSpade = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M181 132.6c6.1-6.1 15.9-6.1 21.6 0l90.8 93.6c26.2 27.2 24.8 72.1-4.7 97.4-24.7 21.5-62.2 18-85.8-4.3-.6-.6-1.2-1.2-1.7-1.8l-2.1-1.2v48.8h24c5.3 0 8 4.5 8 8 0 5.3-2.7 8-8 8h-64c-3.5 0-8-2.7-8-8 0-3.5 4.5-8 8-8h24v-48.8l-.2 1.2-2 2c-23.5 22.1-60.5 25.5-86.02 4.1-29.03-25.3-30.43-70.2-4.22-97.4L181 132.6zm-78.8 104.7c-19.93 19.8-18.85 54.9 3.1 74.2 19 15.8 47.7 13.4 66-5l20.2-22.3 21.2 22.2c18.3 18.7 47.5 20.8 65.5 5.2l.1-.1c22.4-19.2 23.5-54.4 3.6-74.2l-90.1-92.9-89.6 92.9zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm16 0v384c0 26.5 21.49 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgCardSpade;