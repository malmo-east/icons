import * as React from "react";
import { SVGProps } from "react";

const SvgSlotMachine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M440 176h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h69.47l-37.19 133.8c-1.156 4.281 1.312 8.688 5.562 9.875A7.456 7.456 0 0 0 400 336c3.5 0 6.719-2.312 7.719-5.844l40-144a8.11 8.11 0 0 0-1.344-7C444.8 177.2 442.5 176 440 176zm-144 0h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h69.47l-37.19 133.8c-1.156 4.281 1.312 8.688 5.562 9.875A7.456 7.456 0 0 0 256 336c3.5 0 6.719-2.312 7.719-5.844l40-144a8.11 8.11 0 0 0-1.344-7C300.8 177.2 298.5 176 296 176zm-144 0H72c-4.41 0-8 3.6-8 8s3.59 8 8 8h69.47l-37.19 133.8c-1.156 4.281 1.312 8.688 5.562 9.875A7.456 7.456 0 0 0 112 336c3.5 0 6.719-2.312 7.719-5.844l40-144a8.11 8.11 0 0 0-1.344-7C156.8 177.2 154.5 176 152 176zm440-48c-26.5 0-48 21.5-48 48 0 23.77 17.32 43.37 40 47.19V440c0 30.88-25.12 56-56 56H425.9c13.4-11.7 22.1-28.8 22.1-48v-32c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v32c-35.35 0-64 28.7-64 64v192c0 35.35 28.65 64 64 64v32c0 35.35 28.65 64 64 64h400c39.69 0 72-32.31 72-72V223.2c22.7-3.8 40-23.4 40-47.2 0-26.5-21.5-48-48-48zM80 64c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v32H80V64zM16 352V160c0-26.47 21.53-48 48-48h384c26.47 0 48 21.53 48 48v192c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.5-48-48zm368 144H128c-26.47 0-48-21.53-48-48v-32h352v32c0 26.5-21.5 48-48 48zm208-288c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

export default SvgSlotMachine;