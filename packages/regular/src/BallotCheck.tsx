import * as React from "react";
import { SVGProps } from "react";

const SvgBallotCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 352H96c-8.836 0-16 7.164-16 16v32c0 8.8 7.16 16 16 16h32c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16zM96 160h32c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16H96c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16zm248 200H200c-13.25 0-24 10.75-24 24s10.75 24 24 24h144c13.25 0 24-10.75 24-24s-10.7-24-24-24zM171.3 220.7c-6.25-6.25-16.38-6.25-22.62 0L112 257.4l-12.69-12.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l24 24C103.8 294.4 107.9 296 112 296s8.188-1.562 11.31-4.688l48-48c6.29-6.212 6.29-16.412-.01-22.612zM344 232H232c-13.2 0-24 10.8-24 24s10.75 24 24 24h112c13.25 0 24-10.75 24-24s-10.7-24-24-24zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V64c0-8.824 7.178-16 16-16h320c8.822 0 16 7.176 16 16v384zm-56-344H200c-13.2 0-24 10.8-24 24s10.75 24 24 24h144c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgBallotCheck;
