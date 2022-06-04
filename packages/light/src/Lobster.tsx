import * as React from "react";
import { SVGProps } from "react";

const SvgLobster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 0c-4.781 0-9.344 2.156-12.38 5.859s-4.25 8.578-3.312 13.28l16 80c1.75 8.703 10.53 14.27 18.81 12.55 8.688-1.734 14.31-10.16 12.56-18.83l-11.25-56.3C468.7 44.25 480 60.83 480 80v48c0 17.64-14.34 32-32 32s-32-14.36-32-32V80c0-8.84-7.2-16-16-16s-16 7.16-16 16v48c0 17.32 6.977 33 18.19 44.54l-26.85 18.79C367.3 197 357.8 200 347.8 200h-13.69c-3.91-26.2-16.31-46.9-30.11-62.1V80c0-17.64 14.34-32 32-32 8.8 0 16-7.16 16-16s-7.156-16-16-16c-35.28 0-64 28.7-64 64v30.9c-4.662-2.926-8.264-4.926-8.844-5.215C260.9 104.6 258.5 104 256 104s-4.9.6-7.2 1.7c-.5-.6-4.1 1.4-8.8 5.2V80c0-35.3-28.72-64-64-64-8.8 0-16 7.16-16 16s7.156 16 16 16c17.66 0 32 14.36 32 32v57.91c-13.8 15.19-26.2 35.89-30.1 62.09h-13.7c-9.938 0-19.44-3-27.53-8.672L109.8 172.5C121 161 128 145.3 128 128V80c0-8.84-7.2-16-16-16s-16 7.16-16 16v48c0 17.64-14.34 32-32 32s-32-14.4-32-32V80c0-19.17 11.28-35.75 27.56-43.44l-11.25 56.3c-1.75 8.64 3.88 16.24 12.57 18.84 8.281 1.719 17.06-3.844 18.81-12.55l16-80c.938-4.703-.281-9.578-3.312-13.28S84.78 0 79.1 0C35.87 0 0 35.89 0 79.1V128c0 35.3 28.72 64 64 64 5.186 0 10.16-.79 14.99-1.959l39.29 27.51C131.8 227 147.7 232 164.2 232H176v24h-32.9c-7.4 0-14.8-1.7-21.4-5.1l-34.5-17.25c-7.875-3.891-17.5-.766-21.47 7.156-3.98 7.994-.79 17.594 7.11 21.494l34.5 17.25C118.4 285.1 130.8 288 143.1 288H176v16h-53.6c-5.156 0-10.25-.828-15.16-2.453L69.06 288.8c-8.344-2.734-17.44 1.719-20.25 10.11-2.78 8.39 1.75 17.49 10.13 20.29l38.16 12.73c8.2 2.67 16.7 4.07 25.3 4.07H176v16h-.9c-12.34 0-24.72 2.922-35.75 8.438l-18.5 9.25c-7.906 3.953-11.09 13.56-7.156 21.47C116.5 396.8 122.2 400 128 400c2.406 0 4.844-.547 7.156-1.688l18.5-9.25C160.3 385.8 167.7 384 175.1 384h3.734c.86 3.975 1.629 7.973 2.922 11.84l13.22 39.7C169.1 444.3 152 468.1 152 496c0 8.844 7.156 16 16 16h176c8.844 0 16-7.156 16-16 0-27.94-18-51.73-42.97-60.45l13.22-39.7c1.25-4.75 2.05-8.75 2.95-11.85h3.734c7.406 0 14.81 1.75 21.44 5.062l18.5 9.25C379.2 399.5 381.6 400 384 400c5.844 0 11.5-3.234 14.31-8.844 3.938-7.906.75-17.52-7.156-21.47l-18.5-9.25C361.6 354.9 349.3 352 336.9 352h-.9v-16h53.63c8.594 0 17.09-1.385 25.28-4.104l38.16-12.72c8.375-2.781 12.91-11.84 10.12-20.23-2.812-8.391-11.91-12.84-20.25-10.11l-38.16 12.71C399.9 303.2 394.8 304 389.6 304H336v-16h32.91c12.34 0 24.72-2.922 35.75-8.438l34.5-17.25c7.906-3.953 11.09-13.56 7.156-21.47-3.969-7.922-13.59-11.05-21.47-7.156l-34.5 17.25C383.7 254.3 376.3 256 368.9 256H336v-24h11.81c16.53 0 32.41-5 45.91-14.45l39.29-27.51C437.8 191.2 442.8 192 448 192c35.28 0 64-28.7 64-64V79.1C512 35.89 476.1 0 432 0zM208 216c0-41.27 33.03-67.59 48-77.39 14.1 9.79 48 36.09 48 77.39v81.69c-6.9 2.71-23.7 6.31-48 6.31s-41.1-3.6-48-6.3V216zm0 115.1c15.7 3 33.1 4.9 48 4.9 13.1 0 32.35-1.025 48-4.861v14.55C297.1 348.4 280.3 352 256 352s-41.08-3.57-48-6.312V331.1zm93.4 48.6c-.498 1.998-.822 4.037-1.477 5.996l-3.66 10.97C284.9 398.7 270.5 399.7 256 399.7s-28.93-1.018-40.25-3.053l-3.66-10.97c-.654-1.959-.979-3.998-1.477-5.996C225.7 383 242.8 384 256 384s30.3-1 45.4-4.3zM323.7 480H188.3c5.625-9.562 16.22-16 28.84-16 5.625 0 10.81-2.938 13.72-7.75 2.875-4.797 3.062-10.78.406-15.73-.094-.219-2.125-3.719-2.25-3.938l-1.996-5.982c9.08.9 18.88 1.4 28.98 1.4s19.88-.506 28.93-1.404l-1.996 5.982c-.125.219-2.156 3.719-2.25 3.938-2.656 4.953-2.469 10.94.406 15.73A15.942 15.942 0 0 0 294.8 464c12.6 0 23.2 6.4 28.9 16z" />
  </svg>
);

export default SvgLobster;