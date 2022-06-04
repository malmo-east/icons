import * as React from "react";
import { SVGProps } from "react";

const SvgFaceSwear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M557.9 224C542.2 106.6 441.7 16 320 16S97.76 106.6 82.11 224H65.98C81.73 97.72 189.5 0 320 0s238.3 97.72 254 224h-16.1zm-301.5-48c0 8.8-7.2 16-16 16-8.9 0-16-7.2-16-16s7.1-16 16-16c8.8 0 16 7.2 16 16zm128 0c0-8.8 7.1-16 16-16 8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.9 0-16-7.2-16-16zm-200-66.5c1.4-4.2 5.9-6.5 10.1-5.1l96 32c4.2 1.4 5.6 5.9 5.1 10.1-1.4 4.2-5.9 5.6-10.1 5.1l-96-32c-4.2-1.4-6.5-5.9-5.1-10.1zm271.2 0c.5 4.2-.9 8.7-5.1 10.1l-96 32c-4.2.5-8.7-.9-10.1-5.1-1.4-4.2.9-8.7 5.1-10.1l96-32c4.2-1.4 8.7.9 10.1 5.1zM384 432v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-64v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-64h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24h64v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v64h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24zm-80-80v64h64v-64h-64zm260.4-46.7c3.7 2.5 4.7 7.5 2.3 11.1l-96 144c-2.5 3.7-7.5 4.7-11.1 2.3-3.7-2.5-4.7-7.5-2.3-11.1l96-144c2.5-3.7 7.5-4.7 11.1-2.3zM448 328c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm24-8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm104 120c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-24 8c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM208 304c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8zm-24 136c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm24 8c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm-88-127.5c8.1.8 17.5 1.6 23.9 4.1a8.1 8.1 0 0 1 5.9 9.7c-1.1 4.3-5.4 6.9-9.7 5.8-10.5-2.6-25.5-5.1-38.2-3.7-6.26.6-11.34 2.2-14.94 3.7-3.34 3.1-5.69 6.2-6.58 11.1-.71 3.8-.18 6.4.75 8.2.99 2 2.81 3.9 5.87 5.8 6.47 4.1 16 6.8 27.3 10l.1.1c10.5 2.9 22.7 6.4 31.6 12.5 4.7 3.1 8.8 7.3 11.4 12.8 2.6 5.6 3.2 11.9 2 18.9-2 10.8-7.7 17.6-15.8 23-7.4 4.2-16.1 4.6-24.5 5.5v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-9.3c-12.84-2-25.22-5.8-33.48-8.3-4.22-1.4-6.57-5.8-5.26-10.1 1.32-4.2 5.8-6.5 10.02-5.2 11.64 3.6 28.82 8.7 43.72 8 7.4 1 13.4-1 17.6-2.5 3.8-2.2 6.7-6.5 7.9-12 .8-4.3.3-7.2-.7-9.3-1-2.2-2.9-4.3-5.9-7.2-6.3-3.4-15.8-6.3-27.9-9.5l-.6-.4c-10.08-2.8-21.59-6.1-30.08-11.5-4.62-2.9-8.88-6.8-11.57-12.1-2.73-5.4-3.45-11.6-2.21-18.3 1.72-10.2 6.66-16.1 13.45-20.6 6.55-4.4 14.46-6.4 22.21-7.2 1.2-.2 2.4-.3 2.8-.3v-9.1c0-3.5 4.5-8 8-8 5.3 0 8 4.5 8 8l.9 9.4zM0 320c0-35.3 28.65-64 64-64h512c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V320zm16 128c0 26.5 21.49 48 48 48h512c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48v128z" />
  </svg>
);

export default SvgFaceSwear;
