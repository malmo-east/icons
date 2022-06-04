import * as React from "react";
import { SVGProps } from "react";

const SvgCircleMicrophoneLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 320c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96c0 35.3 28.7 64 64 64zm-48-160c0-26.47 21.53-48 48-48s48 21.53 48 48l-48-.9c-4.422 0-8 3.578-8 8s3.6 8.9 8 8.9h48v48l-48-.9c-4.422 0-8 3.578-8 8s3.6 8.9 8 8.9h48v16c0 26.47-21.53 48-48 48s-48-21.5-48-48v-96zm152 56c-4.4 0-8 3.6-8 8v32c0 52.94-43.06 96-96 96s-96-43.1-96-96v-32c0-4.422-3.578-8-8-8s-8 3.6-8 8v32c0 59.01 46.04 107 104 111.2V416c0 4.422 3.578 8 8 8s8-3.578 8-8v-48.81C321.1 363 368 315 368 256v-32c0-4.4-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleMicrophoneLines;
