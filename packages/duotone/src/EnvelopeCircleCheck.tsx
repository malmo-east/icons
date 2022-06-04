import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="envelope-circle-check_svg__fa-primary"
      d="M352 336c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm211.3-20.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L480 353.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72z"
    />
    <path
      d="M0 112c0-26.51 21.49-48 48-48h416c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2 38.4l-13.9 10.4c-66.6 6.4-122.4 50-146.3 109.8l-57.4 43a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112zm320 224c0 42.5 15.1 81.6 40.2 112H64c-35.35 0-64-28.7-64-64V176l217.6 163.2a63.9 63.9 0 0 0 76.8 0l26.4-19.8c-.5 5.5-.8 11-.8 16.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEnvelopeCircleCheck;
