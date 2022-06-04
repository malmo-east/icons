import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M239.8 144.7c-5.2-4.6-12-7.1-19-7.1-4.135 0-8.145.867-11.91 2.578C198.6 144.8 192 155.1 192 166.4v179.2c0 11.27 6.629 21.56 16.89 26.22a28.628 28.628 0 0 0 11.91 2.578c7.004 0 13.75-2.547 18.1-7.164l102.4-89.57C348.4 272.2 352 264.3 352 256s-3.59-16.21-9.848-21.67L239.8 144.7zm91.8 120.9-102.4 89.6a12.75 12.75 0 0 1-8.422 3.172c-1.797 0-3.604-.379-5.303-1.148C210.9 355.2 208 350.6 208 345.6V166.4a12.78 12.78 0 0 1 7.5-11.65 12.787 12.787 0 0 1 5.303-1.148c3.043 0 6.049 1.082 8.422 3.172l102.4 89.6A12.777 12.777 0 0 1 336 256c0 3.7-1.6 7.2-4.4 9.6zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleCaretRight;
