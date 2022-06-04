import * as React from "react";
import { SVGProps } from "react";

const SvgPhoneIntercom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H224c-35.4 0-64 28.64-64 64v320c0 35.36 28.64 64 64 64h224c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm48 384c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v320zM80 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm32 400c0 17.66-14.34 32-32 32H48c-17.66 0-32-14.34-32-32V80c0-17.66 14.34-32 32-32h32c17.66 0 32 14.34 32 32v352zM424 96H248c-13.2 0-24 10.8-24 24v112c0 13.2 10.8 24 24 24h176c13.2 0 24-10.8 24-24V120c0-13.2-10.8-24-24-24zm8 136c0 4.416-3.584 8-8 8H248c-4.4 0-8-3.6-8-8V120c0-4.416 3.584-8 8-8h176c4.416 0 8 3.584 8 8v112zm-160 88c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 80c-17.66 0-32-14.34-32-32s14.34-32 32-32 32 14.34 32 32-14.3 32-32 32zm160-72h-64c-4.416 0-8 3.584-8 8s3.584 8 8 8h64c4.416 0 8-3.584 8-8s-3.6-8-8-8zm0 64h-64c-4.416 0-8 3.584-8 8s3.584 8 8 8h64c4.416 0 8-3.584 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgPhoneIntercom;