import * as React from "react";
import { SVGProps } from "react";

const SvgSquarePhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zm-86.3-119.7-54.23-23.23c-9.656-4.172-21.05-1.422-27.59 6.766l-17.94 21.89C217.4 286.3 193.7 262.6 178.3 234.1l21.91-17.94c8.078-6.609 10.88-17.94 6.781-27.58L183.7 134.3c-4.6-10.5-16-16.2-27-13.7l-50.4 11.6c-10.77 2.5-18.3 12-18.3 23.1C88 285.8 194.2 392 324.7 392c11.09 0 20.56-7.531 23.05-18.31l11.62-50.39c1.73-11.1-3.17-22.5-13.67-27zm-13.5 73.8c-.8 3.5-3.9 5.9-7.5 5.9C203 376 104 276.1 104 155.3c0-3.578 2.422-6.625 5.906-7.422l50.39-11.62c.604-.158 1.104-.258.804-.258 3 0 5.813 1.781 7.047 4.625l23.27 54.25c1.312 3.109.422 6.766-2.188 8.906L158.3 229.8l2.797 5.703C178.8 271.6 208.4 301.2 244.5 318.1l5.703 2.797 26.09-31.88c2.109-2.625 5.734-3.484 8.844-2.141l54.23 23.23a7.642 7.642 0 0 1 4.438 8.734L332.2 370.1z" />
  </svg>
);

export default SvgSquarePhone;