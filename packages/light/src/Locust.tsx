import * as React from "react";
import { SVGProps } from "react";

const SvgLocust = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 320c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM336 32c132.6 0 240 107.5 240 240v48c0 49.8-37.9 90.7-86.3 95.5l20.6 41.3c4 7.9.8 17.6-7.1 21.5-7.9 4-17.6.8-21.5-7.1L454.1 416H317.9l-32 55.9c-4.4 7.7-14.2 10.4-21.8 6-7.7-4.4-10.4-14.2-6-21.8L281 416h-32.2c-15.5 0-30.9-1.6-46-4.8l-45.9 62.3c-5.3 7.1-15.3 8.6-22.4 3.4-7.1-5.3-8.6-15.3-3.4-22.4l38.9-52.8c-4.8-1.8-9.6-3.8-14.4-6l-50.9-23.3-75.9 101.2c-5.3 7.1-15.33 8.5-22.399 3.2-7.07-5.3-8.502-15.3-3.2-22.4L74.9 358.8l-1.92-.9C48.01 346.5 32 321.6 32 294.1c0-38.7 31.4-70.1 70.1-70.1H176l67.2-89.6c3.1-4.2 8.1-6.5 13.2-6.4 5.2.2 10 2.8 12.9 7.1l40.6 60.8 45.2-61.4c3.3-4.4 8.5-6.8 14-6.5 5.4.4 10.3 3.5 12.9 8.3l47.9 87.7H480c23.9 0 45.7 8.7 62.5 23.2C530.3 143.1 442.5 64 336 64h-32c-8.8 0-16-7.16-16-16s7.2-16 16-16h32zM192 256l-67.7 90.2 44.6 20.4c25.1 11.5 52.3 17.4 79.9 17.4h214.9c0-.9.1-.9.2-.9.2 0 .3 0 .4.9H480c35.3 0 63.9-28.6 64-63.9v-.4c-.1-35.2-28.7-63.7-64-63.7H192zm-89.9 0C81.08 256 64 273.1 64 294.1c0 15 8.71 28.5 22.29 34.7l8.26 3.8L152 256h-49.9zm187.6-32.7-34.5-51.6L216 224h73.2l.5-.7zm75.4-49.6L328.9 224h64.5l-28.3-50.3z" />
  </svg>
);

export default SvgLocust;