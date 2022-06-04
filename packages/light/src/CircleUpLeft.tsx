import * as React from "react";
import { SVGProps } from "react";

const SvgCircleUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m323.9 233.4 20.29-20.29c11.49-11.49 14.89-28.59 8.684-43.59-6.199-14.95-20.64-24.62-36.8-24.7l-133.6-2.332c-21.39 0-40.01 18.33-39.98 40.27l2.33 133.1c.012 16.23 9.701 30.73 24.68 36.97 15 6.211 32.11 2.805 43.6-8.688l20.29-20.28 50.91 50.91c15.6 15.6 40.97 15.6 56.57 0l33.94-33.94c15.6-15.6 15.6-40.97 0-56.57L323.9 233.4zm28.3 84.8-34 34c-3.115 3.117-8.197 3.117-11.31 0l-73.49-73.6-42.91 42.91c-4.537 4.535-13.65 2.27-13.67-5.934l-2.332-133.1c-.03-5.918 5.471-8.012 7.725-8.008l133.4 2.34c6.861 0 11.19 8.41 5.932 13.67l-42.91 42.91 73.54 73.54C355.3 310 355.3 315.1 352.2 318.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

export default SvgCircleUpLeft;