import * as React from "react";
import { SVGProps } from "react";

const SvgDogLeashed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 112c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zM69.62 8.564c8.53-10.15 23.67-11.466 33.78-2.94L292.6 164.5l24.9-149.61C318.1 6.297 326.4 0 335.1 0c5.6 0 10 2.641 14.2 7.127L368 32h76.1c12.7 0 25 5.06 34 14.06L496 64h32c26.5 0 48 21.49 48 48v32c0 53-43 96-96 96h-45.3l-2.7 16v192c0 35.3-28.7 64-64 64h-16c-35.3 0-64.9-28.7-64.9-64v-68.4c-9.5 2.3-20.2 3.8-32 4.2-1.8.1-4.4.2-8 .2-1.8 0-4.4-.1-8-.2-10-.4-20.7-1.9-32-4.2V448c0 35.3-27.8 64-64 64h-16c-34.45 0-64-28.7-64-64V224c0-1.3.98-2.6 1.13-3.8-1.1-.4-2.18-.7-3.26-1.1-27.39-9.6-49.03-32.4-56.373-61.8l-3.88-15.5c-3.215-13.7 4.603-25.9 17.463-29.1 12.86-3.2 25.89 4.6 29.1 17.5l3.88 15.5c4.46 17.8 20.46 30.3 38.81 30.3H231.6L72.56 42.38C62.41 33.85 61.1 18.71 69.62 8.564zM336 319.8V448c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V274.8l-96-48v103.7l48-10.7zM240 224H112.1l-.1.9V448c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V319.8l58.4 13c7 1.5 14.2 2.5 21.6 3V224zm95.8-26.9 52.9 26.4L394 192h86c26.5 0 48-21.5 48-48v-32h-51.9l-32-32h-88.8l-19.5 117.1z" />
  </svg>
);

export default SvgDogLeashed;