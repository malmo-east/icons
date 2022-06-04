import * as React from "react";
import { SVGProps } from "react";

const SvgMugTea = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M416 320h26.38c66.83 0 126.6-48.78 133-115.3C582.8 128.4 522.8 64 447.1 64H48c-8.8 0-16 7.2-16 16l-.9 272c0 53.02 42.98 96 96 96h192c53.02 0 96-42.98 96-96l.9-32zm0-208h32c44.13 0 80 35.88 80 80s-35.9 80-80 80h-32V112zm-48 240c0 26.4-21.6 48-48 48H128c-26.4 0-48-21.6-48-48V112h72v40l-30.6 30.6c-6 6-9.4 14.2-9.4 22.7V256c0 17.67 14.33 32 32 32h47.1c17.67 0 32-14.33 32-32l.9-50.7a32.02 32.02 0 0 0-9.373-22.63L184 152v-40h184v240z" />
  </svg>
);

export default SvgMugTea;
