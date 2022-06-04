import * as React from "react";
import { SVGProps } from "react";

const SvgFilmSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="film-slash_svg__fa-primary"
      d="M630.8 469.1 38.81 5.113C28.34-3.058 13.31-1.246 5.109 9.192c-8.172 10.44-6.344 25.53 4.078 33.7L601.2 506.9c4.4 3.4 9.6 5.1 13.9 5.1 7.125 0 14.17-3.156 18.91-9.188 9.09-10.412 7.19-25.512-3.21-33.712z"
    />
    <path
      d="M400 416H240c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h4.082L176 234.6V280c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h42.43L64 146.9V432c0 26.5 21.49 48 48 48h377l-83.17-65.19c-1.73.69-3.73 1.19-5.83 1.19zm-224-8c0 4.4-3.6 8-8 8h-48a8 8 0 0 1-8-8v-48c0-4.4 3.6-8 8-8h48a8 8 0 0 1 8 8v48zM528 32H112c-10.3 0-19.79 3.31-27.61 8.84L224 150.3V112c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-81.9l163.3 128H520a8 8 0 0 1 8 8v28.53l48 37.62V80c0-26.51-21.5-48-48-48zm0 248c0 4.4-3.6 8-8 8h-48a8 8 0 0 1-8-8v-48c0-4.4 3.6-8 8-8h48a8 8 0 0 1 8 8v48zm0-128c0 4.4-3.6 8-8 8h-48a8 8 0 0 1-8-8v-48c0-4.42 3.6-8 8-8h48a8 8 0 0 1 8 8v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFilmSlash;
