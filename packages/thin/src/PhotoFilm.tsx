import * as React from "react";
import { SVGProps } from "react";

const SvgPhotoFilm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M591.1 0h-352c-25.6 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V48c.9-26.51-20.6-48-48-48zm-352 336c-17.67 0-32-14.33-32-32v-18.6L315 178.3c3.12-3.12 8.225-3.121 11.34 0l46.69 46.69L262.1 336h-23zm384-32c0 17.67-14.33 32-32 32H284.7l221.7-221.7c1.5-1.5 3.5-2.3 4.7-2.3 2.125 0 4.188.828 5.688 2.344l106.3 106.3V304zm0-106-95.02-95.02C524.4 98.5 518.4 96 511.1 96c-.031 0 0 0 0 0-6.438.016-12.45 2.516-16.95 7.031l-110.7 110.7L337.7 167c-9.38-9.38-24.59-9.379-33.97.002l-95.7 95.73V48c0-17.67 14.33-32 32-32h352c17.67 0 32 14.33 32 32v150zM288 56c-22.1 0-40 17.94-40 40s17.94 40 40 40 40-17.94 40-40-17.9-40-40-40zm0 64c-13.2 0-24-10.8-24-24s10.78-24 24-24 24 10.77 24 24-10.8 24-24 24zm216 264c-4.406 0-8 3.578-8 8v8h-96v-8a8 8 0 0 0-16 0v104H128V144h24c4.406 0 8-3.578 8-8s-3.6-8-8-8H48c-26.51 0-48 21.5-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-72c0-4.4-3.6-8-8-8zM112 496H48c-17.67 0-32-14.33-32-32v-48h96v80zm0-96H16v-72h96v72zm0-88H16v-72h96v72zm0-88H16v-48c0-17.67 14.33-32 32-32h64v80zm384 240c0 17.67-14.33 32-32 32h-64v-80h96v48z" />
  </svg>
);

export default SvgPhotoFilm;
