import * as React from "react";
import { SVGProps } from "react";

const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M302.9 224h-93.8c-12 0-23.2 5.3-30.7 14.6l-53.9 67c-2.3 3-2.3 7.2.1 10.1l12.81 15.56c6 7.344 15.35 11.61 25.54 11.61.031.031-.047 0 0 0 10.21-.031 19.61-4.203 25.71-11.61 15.57-19.02 50.79-27.26 73.93-1.219l30.63 34.84c6.002 6.812 15.02 10.75 24.74 10.78 9.768 0 18.97-3.906 25.07-10.78l43.72-49.72c2.578-2.906 2.672-7.25.234-10.28l-53.37-66.44C326 229.3 314.8 224 302.9 224zM331 354.3c-6.395 7.184-19.51 7.146-25.8.031l-30.66-34.88c-12.28-13.81-29.1-21.75-45.29-21.75-23.46 0-41.02 8.756-52.99 23.41-6.242 7.582-20.17 7.746-26.53 0L141.1 310.6l49.79-61.97c4.41-5.53 10.21-8.63 18.21-8.63h93.75c7.156 0 13.88 3.156 18.36 8.562l49.07 61.13L331 354.3zM164.8 147.1c10.28 0 20.39-2.25 29.67-6.592L218.5 187.7c2.031 3.938 6.891 5.498 10.78 3.406 3.922-2.031 5.453-6.875 3.406-10.78L204.9 126.8c-2.777-5.387-8.686-4.695-11.33-3.094-8.67 5.394-19.47 7.394-28.77 7.394-29.1 0-52.8-21.8-52.8-49.77 0-27.93 23.69-50.68 52.8-50.68 12.44 0 24.23 4.248 34.14 12.31 4.121 3.355 9.584 1.641 11.85-1.998 9.688-15.62 26.59-24.96 45.22-24.96s35.53 9.342 45.22 24.96c2.279 3.668 7.711 5.334 11.84 1.998 9.906-8.061 21.7-12.31 34.14-12.31 29.11 0 52.8 22.74 52.8 50.68 0 27.93-23.69 50.65-52.8 50.65-10.16 0-20.11-2.875-28.78-8.281-2.619-1.602-8.547-2.297-11.33 3.094L279.3 180.3c-2.047 3.904-.516 8.748 3.406 10.78 4.695 2.502 9.248-.441 10.78-3.406l24.03-46.27a69.949 69.949 0 0 0 29.67 6.592c37.94 0 68.8-29.9 68.8-66.64 0-36.78-30.86-66.68-68.8-66.68-13.34 0-26.09 3.75-37.33 10.9C296.9 9.404 277.3 0 255.1 0s-40 9.404-53 25.56c-11.2-7.16-24-10.91-37.3-10.91-37.9 0-68.8 29.9-68.8 66.68 0 36.77 30.9 65.77 68.8 65.77zm338.3 303.5-97.62-121.5c-2.75-3.438-7.783-4-11.25-1.25-3.438 2.781-3.984 7.812-1.219 11.25l97.51 121.3C502.2 474.5 492.7 496 473 496H39.07c-19.48 0-29.46-21.31-18.58-35.38l97.01-120.5c2.768-3.469 2.219-8.5-1.219-11.25-3.453-2.812-8.484-2.219-11.25 1.188l-97.12 120.7c-8.846 11.47-10.39 26.66-4.016 39.63C10.45 503.7 23.94 512 39.07 512h433.1c15.06 0 28.5-8.281 35.07-21.62 7.26-12.98 4.86-28.18-4.14-39.78z" />
  </svg>
);

export default SvgVolcano;
