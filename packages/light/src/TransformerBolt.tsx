import * as React from "react";
import { SVGProps } from "react";

const SvgTransformerBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 128h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16h-96c-8.836 0-16 7.162-16 16 0 8.8 7.2 16 16 16zM64 64h96c8.836 0 16-7.164 16-16 0-8.84-7.2-16-16-16h-32V16c0-8.84-7.2-16-16-16S96 7.16 96 16v16H64c-8.84 0-16 7.16-16 16s7.16 16 16 16zm304 416h-16V192h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h16v288H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h352c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm-48 0H64V192h256v288zM224 64h96c8.836 0 16-7.164 16-16 0-8.84-7.2-16-16-16h-32V16c0-8.84-7.2-16-16-16s-16 7.16-16 16v16h-32c-8.836 0-16 7.162-16 16 0 8.84 7.2 16 16 16zM64 128h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16s7.16 16 16 16zm64 224h89.38l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.62C151.8 446.4 155.9 448 160 448s8.188-1.562 11.31-4.688l96-96c4.562-4.578 5.938-11.45 3.469-17.44S262.5 320 256 320h-89.4l68.69-68.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-96 96c-4.562 4.578-5.938 11.45-3.469 17.44S121.5 352 128 352z" />
  </svg>
);

export default SvgTransformerBolt;