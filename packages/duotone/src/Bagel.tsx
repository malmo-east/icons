import * as React from "react";
import { SVGProps } from "react";

const SvgBagel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bagel_svg__fa-primary"
      d="M208 96C93.13 96 0 189.1 0 304s93.13 208 208 208 208-93.1 208-208S322.9 96 208 96zM80 288c-8.84 0-16-7.2-16-16s7.16-16 16-16 16 7.2 16 16-7.16 16-16 16zm32 128c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm32-192c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm96 224c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-32-96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm96 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.162 16 16c0 8.8-7.2 16-16 16zm0-160c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM432 0c-63.46 0-120.2 28.52-158.4 73.33 17.2 4.887 33.68 11.48 49.07 19.88 2.895-5.711 6.201-11.07 11.27-14.62 13.42-9.377 34.64-5.072 50.77-10.1C400.3 63.63 414.8 48 431.1 48s31.68 15.63 47.25 20.5c16.11 5.039 37.34.719 50.75 10.1 13.55 9.473 15.79 30.24 25.66 43.23 9.777 12.89 29.73 21.28 35.01 36.72 5.93 14.95-4.87 32.95-4.87 49.45 0 16.51 10.8 34.51 5.76 49.44-5.279 15.47-25.23 23.86-35.01 36.72-9.871 13.01-12.11 33.78-25.66 43.25-13.41 9.359-34.67 5.055-50.75 10.1-13.24 4.131-25.76 15.49-39.76 18.98-4.617 17.13-10.95 33.54-19.04 48.93 3.86.18 7.66.58 11.56.58 114.9 0 208-93.13 208-208S546.9 0 432 0z"
    />
    <path
      d="M584.9 208c0 16.51 10.8 34.51 5.76 49.44-5.279 15.47-25.23 23.86-35.01 36.72-9.871 13.01-12.11 33.78-25.66 43.25-13.41 9.359-34.67 5.055-50.75 10.1-13.25 4.135-25.75 15.5-39.76 18.98C444.9 346.5 448 325.6 448 304c0-11.38-1.068-22.5-2.609-33.46C474.3 264.4 495.1 238.7 495.1 208c0-35.3-28.69-64-64-64-13.37 0-25.75 4.125-36.02 11.16-20-25.21-44.83-46.43-73.25-61.96 2.9-5.742 6.178-11.05 11.27-14.62 13.42-9.377 34.64-5.072 50.77-10.1C400.3 63.63 414.8 48 431.1 48s31.68 15.63 47.25 20.5c16.11 5.039 37.34.719 50.75 10.1 13.55 9.473 15.79 30.24 25.66 43.23 9.777 12.89 29.73 21.28 35.01 36.72 5.93 14.95-4.87 32.95-4.87 49.45z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBagel;