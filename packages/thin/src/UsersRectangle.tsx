import * as React from "react";
import { SVGProps } from "react";

const SvgUsersRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 192c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm64-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm40 144c39.8 0 72 32.2 72 72 0 13.3-10.7 24-24 24H232c-13.3 0-24-10.7-24-24 0-39.8 32.2-72 72-72h80zm-128 80h176c4.4 0 8-3.6 8-8 0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56 0 4.4 3.6 8 8 8zm-80-96c-22.1 0-40 17.9-40 40 0 8.8 7.2 16 16 16h32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32c-17.7 0-32-14.3-32-32 0-30.9 25.1-56 56-56h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64zm72-96c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm248 128c-4.4 0-8-3.6-8-8s3.6-8 8-8h64c30.9 0 56 25.1 56 56 0 17.7-14.3 32-32 32h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c8.8 0 16-7.2 16-16 0-22.1-17.9-40-40-40h-64zm40-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm-32 48c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zM568 0c39.8 0 72 32.24 72 72v368c0 39.8-32.2 72-72 72H72c-39.76 0-72-32.2-72-72V72C0 32.24 32.24 0 72 0h496zM16 440c0 30.9 25.07 56 56 56h496c30.9 0 56-25.1 56-56V72c0-30.93-25.1-56-56-56H72c-30.93 0-56 25.07-56 56v368z" />
  </svg>
);

export default SvgUsersRectangle;
