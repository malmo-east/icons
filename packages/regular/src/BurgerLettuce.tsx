import * as React from "react";
import { SVGProps } from "react";

const SvgBurgerLettuce = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.1 285.6c.4 6.3-2.5 12.3-7.3 16.4-17.7 16.1-39 25.3-62.2 26-23.2-.7-45.4-9.9-62.2-26-3.8-4.4-8.5-7.9-13.8-10.3-5.3-2.5-11-4.6-16.8-4.6-6.7 0-11.6 2.1-17.7 4.6-4.4 2.4-10 5.9-12.9 10.3-8.1 8.3-17.8 14.8-28.5 19.3-10.7 4.4-22.1 6.7-33.7 6.7-11.6 0-23.9-2.3-33.7-6.7-10.7-4.5-20.4-11-28.5-19.3-3.8-4.4-8.5-7.9-13.8-10.3-5.2-2.5-11-4.6-16.8-4.6-5.8 0-11.5 2.1-16.8 4.6-5.3 2.4-10 5.9-13.8 10.3-8.1 8.3-17.8 14.8-28.5 19.3a88.292 88.292 0 0 1-33.68 6.7c-11.58 0-23.04-2.3-33.72-6.7-10.68-4.5-20.37-11-28.507-19.3-2.463-2.9-4.491-4.5-5.965-7.4a23.516 23.516 0 0 1-2.614-9.1c-.253-3.2.137-6.4 1.145-9.5 1.009-3.9 2.616-5.8 4.726-8.2 2.111-2.4 4.685-4.4 7.565-5.8 2.88-1.4 6.01-2.2 9.21-2.4 3.2-.1 6.4.3 9.41 1.4 3.02 1.1 5.78 2.8 8.14 4.1 3.78 5.3 8.47 8.8 13.75 11.2 5.29 2.5 11.03 3.7 16.84 3.7 5.81 0 11.56-1.2 16.84-3.7 5.28-2.4 9.97-5.9 12.86-11.2 9-7.4 18.7-13.9 29.4-18.4 10.7-4.4 22.1-7.6 33.7-7.6 11.6 0 23 3.2 33.7 7.6 10.7 4.5 20.4 11 28.5 18.4 3.8 5.3 8.5 8.8 13.8 11.2 5.2 2.5 11 3.7 16.8 3.7 5.8 0 11.6-1.2 16.8-3.7 5.3-2.4 10-5.9 13.8-11.2 8.1-7.4 17.8-13.9 28.5-18.4 10.7-4.4 22.1-7.6 33.7-7.6 11.6 0 23 3.2 33.7 7.6 10.7 4.5 20.4 11 28.5 18.4 3.8 5.3 8.5 8.8 13.8 11.2 5.2 2.5 11 3.7 16.8 3.7 5.8 0 11.6-1.2 16.8-3.7 5.3-2.4 10-5.9 13.8-11.2 2.4-1.2 5.1-2.8 8.1-3.8s6.2-1.5 9.3-1.3c3.1.3 6.2 1.1 9.1 2.5 2.8 1.4 5.3 3.3 7.4 5.7 4.2 3.9 6.3 11 5 17.4zM50.39 220.8c-4.46-2.2-8.36-5.3-11.42-9.2-3.05-3.9-5.18-8.4-6.22-13.2-1.03-4.9-.95-9.9.24-14.7C54.98 97.02 146.5 32 256 32c109.5 0 201 65.02 223 151.7 1.2 4.8 1.3 9.8.3 14.7-1.1 4.8-3.2 9.3-6.3 13.2-3.9 3.9-6.9 7-11.4 9.2-4.4 2.1-9.3 3.2-14.3 3.2H64.67c-4.94 0-9.83-1.1-14.28-3.2zM86.4 176h339.2a151.03 151.03 0 0 0-57.6-64c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3c0-2.7.7-5.3 2.1-7.6 1.3-2.4 3.2-4.3 5.5-5.68a212.572 212.572 0 0 0-73.4-17.82c1.1 2.19.9 4.62 1.8 7.1 0 4.24-1.7 8.31-4.7 11.31-3 2.99-7.1 4.69-11.3 4.69-4.2 0-8.3-1.7-11.3-4.69-3-3-4.7-7.07-4.7-11.31 0-2.48.7-4.91 1.8-7.1-25.3 1.51-50.2 7.54-73.4 17.82 2.3 1.38 4.2 3.28 5.5 5.68 1.4 2.3 1.2 4.9 2.1 7.6 0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3c-25.9 15.3-45.05 37.5-57.6 64zm388.9 180.7c3 3 4.7 7.1 4.7 11.3v16c0 25.5-10.1 49.9-28.1 67.9-18 18-42.4 28.1-67.9 28.1H128c-25.5 0-49.88-10.1-67.88-28.1-18-18-28.12-42.4-28.12-67.9v-16c0-4.2 1.69-8.3 4.69-11.3 3-3 7.07-4.7 11.31-4.7h416c4.2 0 8.3 1.7 11.3 4.7zm-63.6 66.5c8.1-5.7 14.2-13.8 17.5-23.2H82.75c3.31 9.4 9.44 17.5 17.55 23.2 8.1 5.7 17.8 8.8 27.7 8.8h256c9.9 0 19.6-3.1 27.7-8.8z" />
  </svg>
);

export default SvgBurgerLettuce;