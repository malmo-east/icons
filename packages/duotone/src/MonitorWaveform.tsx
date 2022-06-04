import * as React from "react";
import { SVGProps } from "react";

const SvgMonitorWaveform = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="monitor-waveform_svg__fa-primary"
      d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 384H64V96h448v320z"
    />
    <path
      d="M512 96v320H64V288l118.1-.031 27.62 55.17c5.875 11.88 22.65 11.86 28.52-.01L288 243.8l22.1 44.2H400c8.9 0 16-7.1 16-16s-7.1-16-16-16h-70.13l-27.62-55.13c-5.875-11.88-22.62-11.88-28.5 0L224 300.3l-19.9-39.9c-1.3-2.6-4.1-4.4-7.1-4.4H64V96h448z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMonitorWaveform;
