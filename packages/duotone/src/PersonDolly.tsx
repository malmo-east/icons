import * as React from "react";
import { SVGProps } from "react";

const SvgPersonDolly = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="person-dolly_svg__fa-primary"
      d="M0 479.1c0 17.75 14.25 32.01 32.01 32.01 17.75 0 32-14.25 32-31.1V405.5C48.01 391.8.5 350.8 0 350.3v128.8zM118.1 271a32.003 32.003 0 0 0 28.22 16.92l75.6-.018L205.8 223.9h-39.1l-33.3-61.7c-11.2-21.1-32.8-34.3-56.64-34.3H48.01C21.49 127.9 0 149.4 0 175.9v103c0 18.75 8.251 36.38 22.38 48.63l76.01 65.14 14.13 92.51c1 5.627 10.12 30.63 36.76 26.25 17.5-2.875 29.25-19.38 26.38-36.75l-14.13-92.51c-2.5-14.88-10.13-28.38-21.5-38.13L96.01 306.3v-78.2L118.1 271z"
    />
    <path
      d="M331.2 360.6c2.25 8.502 11.13 13.63 19.63 11.25l117-31.26c8.502-2.25 13.5-11.13 11.25-19.63l-31.38-116.9c-2.377-8.502-11.13-13.63-19.63-11.25L311.1 224.1c-8.502 2.25-13.63 11.13-11.25 19.63L331.2 360.6zm172.3 13.2c-1.125-4.252-5.5-6.752-9.752-5.627l-154.2 41.26c-9.752-12.88-24.26-21.88-40.88-24.51l-59.39-221.7C238.2 159 233.8 156.5 229.4 157.7l-30.9 8.2c-4.2 1.1-6.7 5.5-5.7 9.9l59.01 220c-19.83 13.82-31.36 38.47-25.9 65.5 4.867 24.11 24.57 44.13 48.65 49.18 38.95 8.166 72.72-18.62 77.28-54.66l154.2-41.26c4.375-1.125 6.876-5.5 5.751-9.752L503.5 373.8zm-214.8 89.3c-8.877 0-16-7.127-16-16 0-8.752 7.127-16 16-16 8.752 0 16 7.252 16 16 0 9.8-7.1 16-16 16zM80.01 0C53.38 0 32 21.5 32 48.01s21.5 48.01 48.01 48.01c26.51 0 48.01-21.5 48.01-48.01S106.6 0 80.01 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonDolly;
