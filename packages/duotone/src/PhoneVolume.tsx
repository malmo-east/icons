import * as React from "react";
import { SVGProps } from "react";

const SvgPhoneVolume = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="phone-volume_svg__fa-primary"
      d="M176 352.5c-3.945-9.963-14.14-16.11-24.73-14.97l-53.24 5.314C78.89 286.7 78.89 225.4 98.06 169.3l53.24 5.3c10.63 1.07 20.72-5.025 24.71-14.94l33.75-84.38C214 64.35 209.1 52 200.2 45.86L132.73 3.69C123.2-2.289 110.9-.895 102.9 7.08-34.32 144.3-34.31 367.7 102.9 504.9c7.982 7.984 20.22 9.379 29.75 3.402l67.48-42.19c9.775-6.104 13.9-18.47 9.598-29.3L176 352.5z"
    />
    <path
      d="M284.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406-8.406 10.25-6.906 25.37 3.375 33.78C265.5 228.4 272 241.8 272 255.1s-6.5 27.62-17.81 36.88c-10.28 8.406-11.78 23.53-3.375 33.78 4.719 5.812 11.62 8.812 18.56 8.812 5.344 0 10.75-1.781 15.19-5.406C307.1 311.6 320 284.6 320 255.1s-12.9-54.7-35.4-73.2zm60.5-74.8c-10.22-8.344-25.34-6.906-33.78 3.344-8.406 10.25-6.906 25.37 3.344 33.78C348.6 172.9 368 213.3 368 255.1s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78a23.953 23.953 0 0 0 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C390.2 367.1 416 313.1 416 255.1s-25.8-110.2-70.9-148zm61.3-73.96c-10.22-8.344-25.34-6.875-33.78 3.344-8.406 10.25-6.906 25.37 3.344 33.78C431.9 116.1 464 183.8 464 255.1S431.91 395 375.94 440.8c-10.25 8.406-11.75 23.53-3.344 33.78a23.953 23.953 0 0 0 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C473.5 423.8 512 342.6 512 255.1S473.5 88.14 406.4 33.14z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPhoneVolume;
