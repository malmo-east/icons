import * as React from "react";
import { SVGProps } from "react";

const SvgBedPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bed-pulse_svg__fa-primary"
      d="M624 48.01H508.8L483.92 10.7C479.5 4.031 471.9 0 464.1 0c-.625 0-1.25.025-1.875.078a24.02 24.02 0 0 0-19.94 13.7l-42.72 90.81-21.12-43.12a23.995 23.995 0 0 0-21.54-13.44L208 48.02c-8.8-.01-16 7.16-16 16v15.99c0 8.836 7.163 15.1 15.1 16l133.1.01 36.46 74.55C382.5 178.8 390.8 184 400 184c9.219-.078 17.78-5.438 21.72-13.78l45.91-97.52 8.406 12.62C480.5 91.1 487.1 96.01 496 96.01h128c8.836 0 16-7.164 16-16v-16c0-8.83-7.2-16-16-16zm-560 32c0-8.844-7.156-15.1-16-15.1H16c-8.844 0-16 7.153-16 15.1V496c0 8.8 7.156 16 16 16h32c8.84 0 16-7.2 16-16v-47.1h512V496c0 8.844 7.156 16 16 16h32c8.844 0 16-7.156 16-16V352H64V80.01z"
    />
    <path
      d="M176 160c-44.13 0-80 35.87-80 79.1s35.88 80 80 80 80-35 80-79.1-35.9-80-80-80zm368 0h-82.1l-11.2 23.9c-9.2 19.3-28.9 31.9-50.7 32.1-21.23 0-40.97-12.31-50.3-31.35l-12.08-24.64H304c-8.836 0-16 7.161-16 15.1v175.1L640 352v-96c0-53.9-43-96-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBedPulse;