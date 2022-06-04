import * as React from "react";
import { SVGProps } from "react";

const SvgFilmSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="film-simple_svg__fa-primary"
      d="M464 32v56c0 4.42-3.6 8-8 8h-48a8 8 0 0 1-8-8V32h-48v448h48v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56c26.51 0 48-21.49 48-48V80c0-26.51-21.5-48-48-48zm0 312a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48c0-4.4 3.6-8 8-8h48a8 8 0 0 1 8 8v48zm0-128c0 4.4-3.6 8-8 8h-48a8 8 0 0 1-8-8v-48c0-4.4 3.6-8 8-8h48a8 8 0 0 1 8 8v48zM112 32v56c0 4.42-3.6 8-8 8H56c-4.42 0-8-3.58-8-8V32C21.49 32 0 53.49 0 80v352c0 26.5 21.49 48 48 48v-56c0-4.4 3.58-8 8-8h48a8 8 0 0 1 8 8v56h48V32h-48zm0 312c0 4.4-3.6 8-8 8H56a8 8 0 0 1-8-8v-48c0-4.4 3.58-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-128c0 4.4-3.6 8-8 8H56c-4.42 0-8-3.6-8-8v-48c0-4.4 3.58-8 8-8h48c4.4 0 8 3.6 8 8v48z"
    />
    <path
      d="M352 480H160V32h192v448z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFilmSimple;
