import * as React from "react";
import { SVGProps } from "react";

const SvgBeerMug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M115.2 133.3c12.02-8.062 27.75-4.727 38.31 5.164C167.8 151.8 186.9 160 207.1 160s40.23-8.188 54.49-21.54c10.56-9.891 26.29-13.23 38.31-5.164C310.9 140 322.9 144 335.1 144c39.88 0 71.24-36.47 62.54-77.88-4.861-23.15-23.39-42.46-46.36-48.12-18.08-4.455-35.17-1.193-48.89 7.119-13.33 8.072-29.44 7.051-40.82-3.598C248.2 8.178 229.1 0 207.1 0s-39.3 8.178-53.6 21.52c-11.3 10.65-27.5 11.67-40.8 3.6-13.71-8.32-30.8-11.58-48.88-8.02-22.96 5.658-41.5 24.97-46.36 48.12C8.761 107.5 40.12 144 79.1 144c13.96 0 26-4 36.1-10.7zM432 160h-43.9c-15.4 10-33.2 16-52.1 16-18.12 0-35.66-5.094-50.92-14.76a5.63 5.63 0 0 0-.719.572C263.6 181.3 236.5 192 207.1 192s-54.7-10.7-75.5-30.2c-.2-.2-.5-.4-.7-.6C115.7 170.9 98.12 176 80 176c-17.24 0-33.54-5.9-48-13.5L31.1 448c0 35.35 28.65 64 64 64h223.1c35.35 0 64-28.65 64-64l80.66-36.02C493.5 399.1 512 370.5 512 339v-99c0-44.2-35.8-80-80-80zM160 432c0 8.9-7.1 16-16.9 16s-15.1-7.1-15.1-16l-.01-192c0-8.875 7.127-16 16-16s15.1 7.125 15.1 16l.91 192zm64 0c0 8.9-7.1 16-16.9 16s-15.1-7.1-15.1-16l-.008-192c0-8.875 7.127-16 16-16s15.1 7.125 15.1 16L224 432zm64 0c0 8.875-7.125 16-16 16s-16-7.1-16-16l-.007-192c0-8.875 7.126-16 16-16s15.1 7.125 15.1 16L288 432zm160-93c0 6.25-3.75 12-9.5 14.62L384 377.9V224h48c8.9 0 16 7.1 16 16v99z" />
  </svg>
);

export default SvgBeerMug;