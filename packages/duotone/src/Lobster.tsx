import * as React from "react";
import { SVGProps } from "react";

const SvgLobster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="lobster_svg__fa-primary"
      d="M512 79.1V128c0 36.37-30.43 65.24-67.18 63.51l-46.54 32.58C383.4 234.5 365.1 240 347.8 240H320v128.4c0 10.32-1.664 20.57-4.926 30.36l-16.75 50.26C328.7 454 352 480.2 352 512H160c0-31.81 23.27-57.1 53.68-62.96l-16.76-50.26C193.7 388.1 192 378.7 192 368.4V240h-27.8c-18.19 0-35.63-5.5-50.5-15.91L67.17 191.5C30.42 193.2 0 164.4 0 128V79.1C0 35.82 35.82 0 79.1 0l.9 96 48-64v92.57c0 15.16-5.045 29.7-13.6 41.43l26.81 18.78c5.89 4.72 14.69 7.22 22.99 7.22h34.09C214.1 149.6 256 128 256 128s41.95 21.58 57.72 64h34.09c8.281 0 16.22-2.5 22.94-7.219l26.84-18.78C389 154.3 384 139.7 384 124.6V32l48 64V0c44.2 0 80 35.82 80 79.1z"
    />
    <path
      d="M192 352h-16.9c-12.34 0-24.72 2.922-35.75 8.438l-18.5 9.25c-7.906 3.953-11.09 13.56-7.156 21.47C116.5 396.8 122.2 400 128 400c2.406 0 4.844-.547 7.156-1.688l18.5-9.25C160.3 385.8 167.7 384 175.1 384h18.2c-.9-5.1-1.3-10.4-1.3-15.6V352zM72.84 262.3l34.5 17.25C118.4 285.1 130.8 288 143.1 288H192v-32h-48.9c-7.4 0-14.8-1.7-21.4-5.1l-34.5-17.25c-7.875-3.891-17.5-.766-21.47 7.156-3.98 7.994-.79 17.594 7.11 21.494zM192 336v-32h-69.6c-5.156 0-10.25-.828-15.16-2.453L69.06 288.8c-8.344-2.734-17.44 1.719-20.25 10.11-2.78 8.39 1.75 17.49 10.13 20.29l38.16 12.73c8.2 2.67 16.7 4.07 25.3 4.07H192zm271.2-37.1c-2.812-8.391-11.91-12.86-20.25-10.11l-38.16 12.71c-4.89 1.7-9.99 2.5-15.19 2.5H320v32h69.63c8.594 0 17.09-1.37 25.28-4.104l38.16-12.72C461.4 316.4 465.1 307.3 463.2 298.9zM320 288h48.91c12.34 0 24.72-2.922 35.75-8.438l34.5-17.25c7.906-3.953 11.09-13.56 7.156-21.47-3.969-7.922-13.53-11.08-21.47-7.156l-34.5 17.25C383.7 254.3 376.3 256 368.9 256H320v32zm71.2 81.7-18.5-9.25a80.191 80.191 0 0 0-35.8-8.45H320v16.42c0 5.18-.4 10.48-1.3 15.58h18.2c7.406 0 14.81 1.75 21.44 5.062l18.5 9.25A15.687 15.687 0 0 0 384 400c5.844 0 11.5-3.234 14.31-8.844 3.99-7.856.79-17.556-7.11-21.456zM352 32c0-8.844-7.156-16-16-16-35.28 0-64 28.7-64 64v58.57c9.861 7.475 22.22 19.01 32 34.44V80c0-17.64 14.34-32 32-32 8.8 0 16-7.16 16-16zM176 16c-8.8 0-16 7.16-16 16s7.156 16 16 16c17.66 0 32 14.36 32 32v93.01c9.779-15.44 22.14-26.97 32-34.44V80c0-35.3-28.7-64-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLobster;
