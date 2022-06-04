import * as React from "react";
import { SVGProps } from "react";

const SvgGears = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M104 175.1c0-30 25.1-56 56-56s56 26 56 56c0 31.8-25.1 56-56 56s-56-24.2-56-56zm56-40c-22.1 0-40 18.8-40 40 0 23 17.9 40 40 40s40-17 40-40c0-21.2-17.9-40-40-40zM180.4 9.23c9.4 1.14 16.6 8.57 17.7 17.85l6.9 29.06c13.3 4.99 25.5 12.11 36.2 20.95l28.3-9.3c9-2.96 19-.45 24.7 7.1 3.5 4.67 5.9 9.53 9.8 14.55l3.1 5.39c2.8 5.01 5.3 10.17 7.6 15.47 3.7 8.7.8 17.8-6.2 25l-22.2 19.8c1.1 6.8 1.7 13.8 1.7 20 0 8-.6 15-1.7 21.8l22.2 19.8c7 6.3 9.9 15.4 6.2 25-2.3 4.4-4.8 10.5-7.6 15.5l-3.1 5.4c-3.9 5-6.3 9.8-9.8 14.5-5.7 7.6-15.7 10.1-24.7 7.1l-28.3-9.3c-10.7 8.9-22.9 16-36.2 21l-6.9 29c-1.1 9.3-8.3 16.7-17.7 17.9-6.7.8-13.5 1.2-20.4 1.2-6.9 0-13.7-.4-20.4-1.2-9.4-1.2-17.5-8.6-18.6-17.9l-6.9-29c-12.4-5-24.6-12.1-35.35-21l-28.22 9.3c-8.99 3-19.01.5-24.71-7.1-3.54-4.7-6.84-9.6-9.88-14.6l-3.02-5.3c-2.79-5-5.328-10.2-7.596-15.5-3.704-9.6-.866-18.7 6.196-25l22.18-19.8c-1.12-6.8-2.6-13.8-2.6-21.8 0-6.2 1.48-13.2 2.6-20l-22.18-19.8c-7.062-7.2-9.9-16.3-6.196-25 2.268-6.2 4.806-10.51 7.586-15.54l3.04-5.25c3.03-5.05 6.33-9.93 9.87-14.62 5.7-7.55 15.72-10.06 24.71-7.1l28.22 9.3c10.75-8.84 22.95-15.96 35.35-20.94l6.9-29.07c1.1-9.28 9.2-16.71 18.6-17.849A169.2 169.2 0 0 1 160 8c6.9 0 13.7.418 20.4 1.23zM160 23.1c-6.3 0-12.4 1.28-18.5 2.01-1.8.22-4.1 1.79-4.8 5.23l-7.9 37.69-8.2 3.09C109 75.48 98.33 81.71 88.92 89.44l-6.81 5.6-36.59-12.05c-3.32-1.1-5.86.13-6.93 1.54a153.59 153.59 0 0 0-8.86 13.11l-2.89 4.96c-2.49 4.5-4.76 9.2-6.79 14-.69 1.6-.49 3.5 2.13 6.7L50.91 149l-1.42 8.7c-.98 5.9-1.49 12-1.49 18.3 0 6.3.51 12.4 1.49 18.3l1.42 7.8-28.73 26.6c-2.62 2.3-2.82 5.1-2.13 6.7 2.03 4.8 4.3 9.5 6.8 14l2.88 5c2.73 4.5 5.69 8.9 8.86 13.1 1.07 1.4 3.61 2.6 6.93 1.5l36.59-12.9 6.81 6.5c9.41 7.7 20.08 13.9 31.68 18.3l8.2 2.2 7.9 38.6c.7 3.4 3 5 4.8 5.2 6.1.7 12.2 1.1 18.5 1.1 6.3 0 12.4-.4 18.5-1.1 1.8-.2 4.1-1.8 4.8-5.2l7.9-38.6 8.2-2.2c10.7-4.4 22.3-10.6 31.7-18.3l6.8-6.5 36.6 12.9c3.3 1.1 5.8-.1 6.9-1.5 3.2-4.2 6.1-8.6 8.8-13.1l3-5.1c2.5-4.5 4.7-9.1 5.9-13.9 1.5-1.6 1.3-4.4-1.3-6.7l-28.7-26.6 1.4-7.8c1-5.9 1.5-12 1.5-18.3 0-6.3-.5-12.4-1.5-18.3l-1.4-8.7 28.7-25.7c2.6-3.2 2.8-5.1 1.3-6.7-1.2-4.8-3.4-9.4-5.9-13.9l-3-5.12c-2.7-4.51-5.6-8.86-8.8-13.05-1.1-1.41-3.6-2.64-6.9-1.54l-36.6 12.05-6.8-5.59c-9.4-7.74-21-13.97-31.7-18.33l-8.2-3.09-7.9-37.69c-.7-3.44-3-5.01-4.8-5.23-6.1-.73-12.2-1.11-18.5-1.11v-.9zM464 408c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56zm-40-56c0 22.1 17.9 40 40 40s40-17.9 40-40-17.9-40-40-40-40 17.9-40 40zm121.2 147.1c-5 2.8-11.1 5.3-15.5 7.6-9.6 3.7-18.7.8-25-6.2l-19.8-22.2c-6.8 1.1-13.8 1.7-20.9 1.7-7.1 0-14.1-.6-20.9-1.7l-19.8 22.2c-7.2 7-16.3 9.9-25 6.2-5.3-2.3-10.5-4.8-15.5-7.6l-5.4-3.1c-5-3.9-9.8-6.3-14.5-9.8-7.6-5.7-10.1-15.7-7.1-24.7l9.3-28.3c-8.9-10.7-16-22.9-21-36.2l-29-6.9c-9.3-1.1-16.7-8.3-17.9-17.7-.8-6.7-1.2-13.5-1.2-20.4 0-6.9.4-13.7 1.2-20.4 1.2-9.4 8.6-17.5 17.9-18.6l29-6.9c5-12.4 12.1-24.6 21-35.3l-9.3-28.3c-3-9-.5-19 7.1-24.7 4.7-3.5 9.6-7.7 14.6-9.9l5.3-3c5-2.8 9.3-5.3 15.5-7.6 8.7-3.7 17.8-.8 25 6.2l19.8 22.2c6.8-1.1 13.8-1.7 20.9-1.7 7.1 0 14.1.6 20.9 1.7l19.8-22.2c6.3-7 15.4-9.9 25-6.2 5.3 2.3 10.5 4.8 15.5 7.6l5.3 3c5 2.2 9.9 6.4 14.6 9.9 7.6 5.7 10.1 15.7 7.1 24.7l-9.3 28.3c8.9 10.7 16 22.9 21 35.3l29 6.9c9.3 1.1 16.7 9.2 17.9 18.6.8 6.7 1.2 13.5 1.2 20.4 0 6.9-.4 13.7-1.2 20.4-1.2 9.4-8.6 16.6-17.9 17.7l-29 6.9c-5 13.3-12.1 25.5-21 36.2l9.3 28.3c3 9 .5 19-7.1 24.7-4.7 3.5-9.5 5.9-14.5 9.8l-5.4 3.1zm-154.5-13.9c4.5 2.5 9.1 4.7 13.9 5.9 1.6 1.5 3.5 1.3 6.7-1.3l25.7-28.7 8.7 1.4c5.9 1 12.1 1.5 18.3 1.5 6.2 0 12.4-.5 18.3-1.5l7.8-1.4 26.6 28.7c2.3 2.6 5.1 2.8 6.7 1.3 4.8-1.2 9.4-3.4 13.9-5.9l5.1-3c4.5-2.7 8.9-5.6 13.1-8.8 1.4-1.1 2.6-3.6 1.5-6.9l-12.9-36.6 6.5-6.8c7.7-9.4 13.9-21 18.3-31.7l2.2-8.2 38.6-7.9c3.4-.7 5-3 5.2-4.8.7-6 1.1-12.2 1.1-18.5 0-6.3-.4-12.4-1.1-18.5-.2-1.8-1.8-4.1-5.2-4.8l-38.6-7.9-2.2-8.2c-4.4-11.6-10.6-22.3-18.3-31.7l-6.5-6.8 12.9-36.6c1.1-3.3-.1-5.8-1.5-6.9-4.2-3.2-8.6-6.1-13.1-8.9l-5-2.9c-4.5-2.4-9.2-4.7-14-6.8-1.6-.6-5.3-.4-6.7 2.2l-26.6 28.7-7.8-1.4c-5.9-1-12.1-1.5-18.3-1.5-6.3 0-12.4.5-18.3 1.5l-8.7 1.4-25.7-28.7c-3.2-2.6-5.1-2.8-6.7-2.2-4.8 2.1-9.5 4.4-14 6.8l-5 2.9c-4.5 2.8-8.9 5.7-13.1 8.9-1.4 1.1-2.6 3.6-2.4 6.9l12.9 36.6-5.6 6.8c-7.7 9.4-13.9 20.1-18.3 31.7l-3.1 8.2-37.7 7.9c-3.4.7-5 3-5.2 4.8-.7 6.1-2 12.2-2 18.5 0 6.3 1.3 12.5 2 18.5.2 1.8 1.8 4.1 5.2 4.8l37.7 7.9 3.1 8.2c4.4 10.7 10.6 22.3 18.3 31.7l5.6 6.8-12.9 36.6c-.2 3.3 1 5.8 2.4 6.9 4.2 3.2 8.6 6.1 13.1 8.8l5.1 3z" />
  </svg>
);

export default SvgGears;
