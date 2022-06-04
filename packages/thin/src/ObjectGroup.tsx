import * as React from "react";
import { SVGProps } from "react";

const SvgObjectGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M136 176c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v64c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-64zm40-24c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24h-96zm224 80c22.1 0 40 17.9 40 40v64c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40zM72 127.3c-22.7-3.8-40-23.5-40-47.3 0-26.51 21.49-48 48-48 23.8 0 43.5 17.3 47.3 40h321.4c3.8-22.7 23.5-40 47.3-40 26.5 0 48 21.49 48 48 0 23.8-17.3 43.5-40 47.3v257.4c22.7 3.8 40 23.5 40 47.3 0 26.5-21.5 48-48 48-23.8 0-43.5-17.3-47.3-40H127.3c-3.8 22.7-23.5 40-47.3 40-26.51 0-48-21.5-48-48 0-23.8 17.3-43.5 40-47.3V127.3zM80 48c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm47.3 376h321.4c3.3-20.1 19.2-36 39.3-39.3V127.3c-20.1-4.2-36-19.2-39.3-39.3H127.3c-4.2 20.1-19.2 35.1-39.3 39.3v257.4c20.1 3.3 35.1 19.2 39.3 39.3zM80 400c-17.67 0-32 14.3-32 32s14.33 32 32 32 32-14.3 32-32-14.33-32-32-32zm416 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-416c-17.7 0-32 14.33-32 32s14.3 32 32 32 32-14.33 32-32-14.3-32-32-32z" />
  </svg>
);

export default SvgObjectGroup;