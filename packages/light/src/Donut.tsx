import * as React from "react";
import { SVGProps } from "react";

const SvgDonut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 208v96c0 88.4-114.6 160-256 160S0 392.4 0 304v-96C0 119.6 114.6 48 256 48s256 71.6 256 160zm-32.1 73.6c-1.6.8-2.7 1.8-4.4 2.5-13.3 5.1-25.4 14.5-32 26.7-9.8 12.6-22.6 22.6-37.2 29.1-14.7 6.4-30.7 8.2-46.7 7.7-17.8-.2-35.4 3.3-51.8 10.2-33.3 13.6-70.5 13.6-103.7 0-16.4-6.9-34.1-10.4-51.9-10.2-15.9.5-32-1.3-46.6-7.7-14.67-6.5-27.47-16.5-37.25-29.1-7.45-12.2-18.69-21.6-32-26.7-1.63-.7-2.81-1.7-4.35-2.5V304c0 69.4 102.6 128 224 128s224-58.6 224-128l-.1-22.4zm.1-73.8c0-59.2-75.2-110.55-173.9-124.15l-22.8 23.65c-3 3-7.1 4.7-11.3 4.7-4.2 0-8.3-1.7-11.3-4.7s-5.6-7.1-5.6-11.3c0-4.25 2.6-8.32 5.6-11.33l4.4-4.38c-3.1-.1-5.9-.29-9.1-.29-121.4 0-224 58.6-224 128v32.1c0 2.2 4 8 17.38 14.6 19.89 7.9 36.56 21.4 47.36 40.8 7.16 7.3 15.96 12.8 25.56 16.3 9.6 3.4 19.9 4.7 30.1 3.7 22.2-.2 44.3 4.1 64.8 12.8 25 10 52.9 10 77.9 0 20.5-8.7 42.5-13 64.7-12.8 10.2 1 20.5-.3 30.1-3.7 9.7-3.5 18.4-9 25.6-16.3.3-.6.9-1.1 1.2-1.7-1.4-.7-3.6-1.6-3.9-2.6l-32-32c-2.3-3.1-3.4-6.9-3.2-10.7.3-3.9 2-7.5 4.7-10.2 2.7-2.7 6.3-4.4 10.2-4.7 3.8-.2 7.6.9 10.7 3.2l32 32c.5.6 1 1.3 1.5 2 7.9-6.5 16.7-11.9 26.1-16 13.2-6.7 17.2-12.5 17.2-14.7v-32.3zm-52.7-43.1c1.5 1.5 1.8 3.2 3.5 5.2.8 1.9 1.2 4 1.2 6.1 0 2.1-.4 4.2-1.2 6.1-1.7 2-2 3.7-3.5 5.2s-3.2 1.8-5.2 3.5c-1.9.8-4 1.2-6.1 1.2-2.1 0-4.2-.4-6.1-1.2-2-1.7-3.7-2-5.2-3.5l-32-32c-3-3-5.6-7.1-5.6-11.3 0-4.2 2.6-8.3 5.6-11.3 3-3 7.1-5.6 11.3-5.6 4.2 0 8.3 2.6 11.3 5.6l32 32zm-240 112c3 3 4.7 7.1 4.7 11.3 0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7l-32-32c-3-3-5.6-7.1-5.6-11.3 0-4.2 2.6-8.3 5.6-11.3 3-3 7.1-5.6 11.3-5.6 4.2 0 8.3 2.6 11.3 5.6l32 32zM320 255.1c4.2 0 8.3 2.6 11.3 5.6 3 3 4.7 7.1 4.7 11.3 0 4.2-1.7 8.3-4.7 11.3l-32 32c-3 3-7.1 4.7-11.3 4.7-4.2 0-8.3-1.7-11.3-4.7s-5.6-7.1-5.6-11.3c0-4.2 2.6-8.3 5.6-11.3l32-32c3-3 7.1-5.6 11.3-5.6zm-212.7-58.4c3 3 4.7 7.1 4.7 11.3 0 4.2-1.7 8.3-4.7 11.3S100.2 224 96 224H64c-4.24 0-8.31-1.7-11.31-4.7S48 212.2 48 208c0-4.2 1.69-8.3 4.69-11.3 3-3 7.07-4.7 11.31-4.7h32c4.2 0 8.3 1.7 11.3 4.7zM128 176c-4.2 0-8.3-1.7-11.3-4.7s-5.6-7.1-5.6-11.3c0-4.2 2.6-8.3 5.6-11.3l32-32c3-3 7.1-5.6 11.3-5.6 4.2 0 8.3 2.6 11.3 5.6 3 3 4.7 7.1 4.7 11.3 0 4.2-1.7 8.3-4.7 11.3l-32 32c-3 3-7.1 4.7-11.3 4.7zm208 16c0 27.4-34.4 48-80 48s-80-20.6-80-48 34.4-48 80-48 80 20.6 80 48zm-32 0c0-9.1-20.6-16-48-16s-48 6.9-48 16 20.6 16 48 16 48-6.9 48-16z" />
  </svg>
);

export default SvgDonut;
