import * as React from "react";
import { SVGProps } from "react";

const SvgThoughtBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 448c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.33-32-32-32zm112-64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM370.2 64.08C344.8 24.17 301.6 0 254 0c-46.7 0-89.5 23.64-115.1 62.64C61.92 64.8 0 128.4 0 206.6 0 296 81.43 368.7 172.6 347.5c20.7 23.1 50 36.5 81.4 36.5 31.13 0 60.28-13.16 80.96-35.92 11.32 2.91 22.76 4.381 34.14 4.381C447.9 352.5 512 287.6 512 208.1c0-79.2-63.5-143.41-141.8-144.02zM334.9 297.7c-10.39-4.099-22.39-.203-28.53 9.34-11.63 18.1-31.22 28.9-52.4 28.9-21.24 0-40.84-10.87-52.5-29.07-4.465-7.009-12.09-10.1-20-10.1-2.605 0-5.209.422-7.783 1.314C162.7 301 152.7 302.9 142.9 302.9c-52.53 0-95.26-43.12-95.26-96.13 0-52.83 42.45-95.86 96.96-95.86.155 0 .341.016.527.016l5.054.578c9.643.814 18.64-4.396 22.98-13 15.81-31.12 46.79-50.44 80.87-50.44 34.82 0 66.11 19.87 81.64 51.85 4.372 8.997 13.8 14.38 23.75 13.33l4.837-.594c1.612-.219 3.194-.5 4.868-.5 52.53 0 95.26 43.12 95.26 96.13C464.4 272.6 399.8 322.9 334.9 297.7z" />
  </svg>
);

export default SvgThoughtBubble;