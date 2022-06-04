import * as React from "react";
import { SVGProps } from "react";

const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M463.1 32h-416C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48V80c0-26.51-20.6-48-48-48zM112 464H48c-17.64 0-32-14.36-32-32v-24h95.1l.9 56zm0-72H16v-80h96v80zm0-96H16v-80h96v80zm0-96H16v-80h96v80zm-.9-96H16V80c0-17.64 14.36-32 32-32h64l-.9 56zM384 464H128V264h256v200zm0-216H128V48h256v200zm112 184c0 17.64-14.36 32-32 32h-64v-56h96v24zm0-40h-96v-80h96v80zm0-96h-96v-80h96v80zm0-96h-96v-80h96v80zm0-96h-96V48h64c17.64 0 32 14.36 32 32v24z" />
  </svg>
);

export default SvgFilm;
