import * as React from "react";
import { SVGProps } from "react";

const SvgWaveformLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="waveform-lines_svg__fa-primary"
      d="M128 192c-17.7 0-32 14.3-32 31.1V288c0 17.7 14.3 32 31.1 32s32.9-14.3 32.9-32v-64.9c0-16.8-14.3-31.1-32-31.1zM320 0c-17.7 0-32 14.33-32 31.1V480c0 17.7 14.3 32 31.1 32s32.9-14.3 32.9-32V31.1C352 14.33 337.7 0 320 0zm192 64c-17.67 0-32 14.33-32 31.1V416c0 17.7 14.3 32 31.1 32 18.6 0 32.9-14.3 32.9-32V95.1c0-16.77-14.3-31.1-32-31.1z"
    />
    <path
      d="M224 96c-17.7 0-32 14.3-32 31.1v256c0 18.6 14.3 32.9 31.1 32.9s32.9-14.3 32.9-32V127.1c0-16.8-14.3-31.1-32-31.1zM32 224c-17.67 0-32 14.3-32 31.1S14.33 288 31.1 288 64 273.7 64 256s-14.33-32-32-32zm576 0c-17.67 0-32 14.33-32 31.1s14.3 32.9 32 32.9 32-14.33 32-31.1-14.3-32.9-32-32.9zm-192-96c-17.7 0-32 14.3-32 31.1v192c0 18.6 14.3 32.9 31.1 32.9s32.9-14.3 32.9-32V159.1c0-16.8-14.3-31.1-32-31.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWaveformLines;
