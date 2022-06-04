import * as React from "react";
import { SVGProps } from "react";

const SvgEyeEvil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M424 186.1c0-2.896-2.318-8.001-7.973-8.001C408.6 178.1 382.9 216 320 216c-62.54 0-88.63-37.94-96.04-37.94-5.643 0-7.961 5.11-7.961 8.001 0 4.89 2.946 6.661 15.53 16.24C221.5 218.7 216 236.1 216 256c0 57.34 46.66 104 104 104s104-46.7 104-104c0-19.01-5.529-37.34-15.53-53.7C420.8 192.1 424 191.1 424 186.1zm-122.3 44.6c6 .8 12.1 1.3 18.3 1.3 6.152 0 12.22-.506 18.23-1.258 3.24 6.896 5.736 15.16 5.736 25.29 0 31.97-23.98 47.98-23.98 47.98S295.1 288 295.1 256c0-10.1 3.4-18.4 6.6-25.3zM320 344c-48.53 0-88-39.47-88-88 0-15.75 4.284-31.06 12.44-44.72.001 0 0 0 0 0 .002 0-.002 0 0 0 .487 0 15.22 10.17 41.31 16.41-3.76 9.168-5.781 18.47-5.781 28.34 0 36.97 27.48 63.98 40.02 63.98 12.52 0 39.98-27.04 39.98-63.98 0-9.871-2.021-19.17-5.775-28.33 26.12-6.228 40.88-16.42 41.37-16.42.002 0-.002 0 0 0 0 0-.001 0 0 0C403.7 224.9 408 240.3 408 256c0 48.5-39.5 88-88 88zm301.3-112.1L515 203.2a372.301 372.301 0 0 0-10.58-13.41c11.59-18.34 50.72-80.31 50.75-80.34 2.507-4.028 3.748-8.494 3.748-12.94 0-15.78-13.98-25.12-25.89-25.12-3.078 0-6.214.531-9.29 1.624l-113.6 40.88c-7.922-3.719-16.14-7-24.55-9.75l-41.88-89.09C339.4 5.781 330.3 0 319.1 0s-18.5 5.781-22.8 15.03l-41.89 89.13c-8.41 2.74-16.61 6.04-24.51 9.74L116.3 73.03c-3.1-1.07-6.2-1.6-10.2-1.6-11.78 0-25.9 9.29-25.9 25.08 0 4.459 1.248 8.949 3.774 13.01l50.73 80.31C131.1 194.2 128.4 198.7 125 203.2L18.66 231.9C7.5 234.9 0 244.5 0 256c0 11.47 7.5 21.12 18.63 24.06l106.4 28.72c3.234 4.312 6.75 8.75 10.48 13.31-55.95 88.42-54.42 84.42-54.42 93.38 0 15.78 13.98 25.12 25.89 25.12 3.078 0 6.214-.531 9.29-1.624l113.6-40.88c7.922 3.719 16.14 7 24.55 9.75l41.88 89.09C300.6 506.2 309.7 512 319.1 512s19.39-5.781 23.69-15.03l41.89-89.13a216.306 216.306 0 0 0 24.55-9.75l113.6 40.88c3.094 1.096 6.241 1.63 9.326 1.63 11.83 0 25.84-9.415 25.84-25.11 0-9.314.52-6.569-54.41-93.39 3.734-4.562 7.25-9 10.48-13.31l106.4-28.69c11.16-2.969 18.66-12.62 18.66-24.09S632.5 234.9 621.3 231.9zm-4.1 32.7-111.8 30.16c-8.376 11.38-11.4 14.69-20.75 26.25.467.7 58.24 90.21 58.24 94.41 0 5.974-5.996 9.12-10.03 9.12-1.186 0-2.452-.2-3.778-.658l-119.9-43.16c-16.81 8.317-25.7 10.96-35.11 13.94l-44.89 95.5c-1.688 3.625-5.441 5.445-9.199 5.445s-7.52-1.82-9.223-5.477l-44.88-95.47c-9.172-2.901-18.17-5.558-35.11-13.94l-119.9 43.16a11.527 11.527 0 0 1-3.782.658c-4.193 0-10.05-3.311-10.05-9.137 0-4.45 57.86-93.63 58.36-94.36C145.3 308.9 141.8 304.6 134.5 294.8L22.75 264.6c-6.27-2.5-6.75-7-6.75-8.6s.484-6.969 6.781-8.625l111.8-30.16c8.836-12 13.66-17.61 20.89-26.06C90.74 91.14 97.05 97.76 97.05 96.56c0-5.924 5.894-9.138 9.977-9.138 1.2 0 2.483.205 3.83.676l119.9 43.16c16.81-8.317 25.7-10.96 35.11-13.94l44.89-95.5c1.688-3.625 5.441-5.445 9.199-5.445s7.52 1.82 9.223 5.477l44.88 95.47c9.172 2.9 18.17 5.558 35.11 13.94l119.9-43.16a11.41 11.41 0 0 1 3.81-.676c4.158 0 10.02 3.331 10.02 9.146 0 1.213 5.592-4.455-58.41 94.62 7.279 8.444 11.66 13.46 20.91 26.03l111.8 30.16C623.5 249 624 254.4 624 256s-.5 6.1-6.8 8.6z" />
  </svg>
);

export default SvgEyeEvil;