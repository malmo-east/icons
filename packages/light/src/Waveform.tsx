import * as React from "react";
import { SVGProps } from "react";

const SvgWaveform = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M383.9 512c-.1 0-.8 0 0 0-7.938-.094-14.81-6.031-15.86-13.88L320 137.3l-48.9 360.8c-.2 7-6.9 13.8-14.8 13.9-.078 0 .063 0 0 0-7.844 0-14.7-5.688-15.95-13.47L192.9 202.8l-33.06 231.5c-1.14 6.8-7.64 13.5-15.44 13.7-7.875.156-14.59-5.25-16.12-12.88L92.13 254.2l-12.96 38.9C77 299.6 70.89 304 64 304l-48.02-.9c-8.824 0-15.98-6.3-15.98-16 0-8 7.172-16 16-16l36.47.9 28.36-85.06C83.11 180.1 89.45 175.3 97 176c7.234.438 13.27 5.719 14.69 12.84l29.69 148.4 34.78-243.5c1.14-7.83 6.94-13.68 15.74-13.74 7.922 1.125 14.69 5.656 15.94 13.47l46.86 292.3 49.4-371.89C305.2 5.938 311.1 0 320 0s14.8 5.938 15.86 13.88l49.48 371.9 46.86-292.3c1.3-7.82 9.5-12.92 15.9-13.48 7.906.063 14.58 5.906 15.7 13.75l34.78 243.5 29.69-148.4c1.422-7.125 7.453-12.41 14.69-12.84 7.469-.688 13.88 4.031 16.17 10.91L587.5 272l36.5-.9c8.828 0 16 7.169 16 16.01 0 8.812-7.156 15.99-15.98 15.99L576 304c-6.891 0-13-4.406-15.17-10.94l-12.95-38.84-36.19 180.9C510.2 442.8 503.3 448 495.6 448c-7.797-.219-14.3-6.031-15.41-13.75l-33.06-231.5-47.42 295.8C398.4 506.3 391.7 512 383.9 512z" />
  </svg>
);

export default SvgWaveform;