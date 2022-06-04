import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M296 192H24c-13.31 0-24 10.8-24 23.1a23.98 23.98 0 0 0 6.551 16.48l136 144C147.1 381.3 153.4 384 160 384s12.91-2.721 17.45-7.521l136-144C317.7 227.9 320 222 320 215.1c0-12.3-10.7-23.1-24-23.1zm5.8 29.5L166.7 364.6c-2.4 2.5-4.5 3.4-6.7 3.4s-4.312-.914-5.816-2.506l-135.1-144C16.78 220 16 218 16 215.1c0-3.5 3.59-7.1 8-7.1h272c4.412 0 8 3.586 8 7.994 0 2.006-.8 4.006-2.2 5.506z" />
  </svg>
);

export default SvgCaretDown;
