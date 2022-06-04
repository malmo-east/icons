import * as React from "react";
import { SVGProps } from "react";

const SvgTrashCanUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m115.6 64 28.2-45.2A39.944 39.944 0 0 1 177.7 0h92.6c13.8 0 26.6 7.105 33.9 18.8L332.4 64H440c4.4 0 8 3.58 8 8s-3.6 8-8 8H8a8 8 0 0 1-8-8 8 8 0 0 1 8-8h107.6zm18.8 0h179.2l-23-36.72C286.2 20.26 278.5 16 270.3 16h-92.6c-8.2 0-15.9 4.26-20.3 11.28L134.4 64zM40 112c4.42 0 8 3.6 8 8v320c0 30.9 25.07 56 56 56h240c30.9 0 56-25.1 56-56V120c0-4.4 3.6-8 8-8s8 3.6 8 8v320c0 39.8-32.2 72-72 72H104c-39.76 0-72-32.2-72-72V120c0-4.4 3.58-8 8-8zm173.9 74.6c3 3.3 2.8 8.3-.5 11.3l-72.7 65.2H248c39.8 0 72 33.1 72 72.9v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40c0-30.9-25.1-56.9-56-56.9H140.7l72.7 67c3.3 3 3.5 8 .5 11.3-3 3.2-8 3.5-11.3.5l-88-80c-2.5-1.5-2.6-3.6-2.6-6.8 0-1.4.1-3.5 2.6-5l88-80c3.3-3 8.3-2.8 11.3.5z" />
  </svg>
);

export default SvgTrashCanUndo;
