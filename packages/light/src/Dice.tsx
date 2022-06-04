import * as React from "react";
import { SVGProps } from "react";

const SvgDice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 296c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1 23.1-10.75 23.1-23.1S237.3 296 224 296zm-96-96c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1 24-8.9 24-22.2-10.7-24-24-24zm96 0c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1 23.1-10.75 23.1-23.1S237.3 200 224 200zm255.1 176c13.25 0 23.1-10.75 23.1-23.1s-10.75-23.1-23.1-23.1-23.1 10.75-23.1 23.1 10.7 23.1 23.1 23.1zM224 104c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1 23.1-10.75 23.1-23.1S237.3 104 224 104zm351.1 88H472.4c3.59 10.21 5.848 20.92 5.848 31.1h96.87c17.62 0 31.1 14.37 31.1 31.1v191.1c0 17.62-14.37 31.1-31.1 31.1h-191.1c-17.62 0-31.1-14.37-31.1-31.1v-56.74L320 423.2v24.84c0 35.36 28.6 63.96 63.1 63.96h191.1c35.37 0 63.1-28.62 63.1-63.1V257.8c1.8-37.2-25.9-65.8-62.2-65.8zM320 200c-13.25 0-23.1 10.75-23.1 23.1S306.8 248 320 248s23.1-10.75 23.1-23.1S333.2 200 320 200zm127.1 24c0-17.15-6.691-33.43-18.84-45.83L270.1 19.08C257.4 6.695 241.1 0 223.1 0s-32.5 6.695-44.9 18.85L19.07 177.9C6.695 190.6-.001 206.8-.001 223.1c0 17.15 6.696 33.48 18.85 45.87l159.1 159.1c12.63 12.38 28.9 19.07 46.06 19.07s33.43-6.693 45.83-18.85l159.1-159.1C441.3 257.4 447.1 241.2 447.1 224zm-40.9 23.3L247.3 406.2c-6.275 6.148-14.56 9.662-23.34 9.662-8.785 0-17.07-3.514-23.34-9.662L41.79 247.3c-6.15-6.2-9.66-14.5-9.66-23.3 0-8.785 3.516-17.07 9.664-23.34L200.7 41.79c6.275-6.148 14.56-9.662 23.34-9.662 8.785 0 17.07 3.514 23.34 9.662l158.9 158.9c6.15 6.275 9.664 14.56 9.664 23.34-.044 8.77-3.544 17.07-9.744 23.27z" />
  </svg>
);

export default SvgDice;
