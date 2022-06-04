import * as React from "react";
import { SVGProps } from "react";

const SvgFileHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM191.9 267.6l-8.445-8.754C171.5 246.6 155.5 240 139.6 240c-12.77 0-25.47 4.227-35.93 13.13-26.93 23.02-28.39 64.17-4.285 89.19l82.99 85.56C185 430.6 188.5 432 192 432s6.977-1.375 9.67-4.127l82.99-85.56c24.11-25.02 22.64-66.17-4.41-89.19C269.9 244.2 257.2 240 244.4 240c-15.97.002-32.08 6.588-44.05 18.88l-8.45 8.72zm31.4 13.6c5.6-5.8 13.3-9.2 21.1-9.2 3.979 0 9.82.943 15.14 5.5 6.143 5.227 9.75 12.61 10.15 20.78.402 8.146-2.531 16.1-7.979 21.75l-69.69 71.85L122.4 320.1c-5.5-5.7-8.5-13.7-8.1-21.8.397-8.188 3.982-15.58 10.05-20.77 5.35-5.43 11.25-5.53 15.25-5.53 7.658 0 15.27 3.328 20.85 9.098L191.9 313.7l31.4-32.5z" />
  </svg>
);

export default SvgFileHeart;
