import * as React from "react";
import { SVGProps } from "react";

const SvgPlugCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 0c13.3 0 24 10.75 24 24v88H72V24C72 10.75 82.75 0 96 0zm192 0c13.3 0 24 10.75 24 24v88h-48V24c0-13.25 10.7-24 24-24zm72 144c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v19.2c-18.9 9.2-34.2 21.4-48 36V192H80v64c0 61.9 50.1 112 112 112 24.3 0 46.9-7.8 65.2-20.9-.8 6.8-1.2 13.8-1.2 20.9 0 11.4 1.1 22.5 3.1 33.3-13.4 6.2-27.9 10.6-43.1 12.9V512h-48v-97.8c-76.98-11.6-136-78-136-159.1v-64h-8c-13.25 0-24-9.8-24-24 0-12.4 10.75-24 24-24l336 .9zm216 224c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-99.3-43.3L416 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

export default SvgPlugCircleCheck;
