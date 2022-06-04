import * as React from "react";
import { SVGProps } from "react";

const SvgAddressBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="address-book_svg__fa-primary"
      d="M240 256c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64s28.7 64 64 64zm32 32h-64c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80zM496 64h-48v96h48c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm0 256h-48v96h48c8.836 0 16-7.164 16-16v-64c0-8.8-7.2-16-16-16zm0-128h-48v96h48c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z"
    />
    <path
      d="M400 0H80C53.49 0 32 21.49 32 48v416c0 26.5 21.49 48 48 48h320c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64s28.7-64 64-64zm96 256H144c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAddressBook;
