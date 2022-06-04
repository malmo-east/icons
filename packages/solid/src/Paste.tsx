import * as React from "react";
import { SVGProps } from "react";

const SvgPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 96V80c0-26.51-21.5-48-48-48h-56.6C204.3 12.89 183.6 0 160 0s-44.3 12.89-55.4 32H48C21.49 32 0 53.49 0 80v320c0 26.5 21.49 48 48 48l144 .001V176c0-44.2 35.8-80 80-80h48zm-160-8c-13.2 0-24-10.75-24-24s10.8-24 24-24 24 10.75 24 24-10.7 24-24 24zm256 40v96h96l-96-96zm-32 96v-96H272c-26.5 0-48 21.5-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48V256h-95.99C398.4 256 384 241.6 384 224z" />
  </svg>
);

export default SvgPaste;
