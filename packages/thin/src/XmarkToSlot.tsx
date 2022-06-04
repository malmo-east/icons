import * as React from "react";
import { SVGProps } from "react";

const SvgXmarkToSlot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M104 368c4.406 0 8-3.594 8-8V72c0-13.22 10.78-24 24-24h304c13.22 0 24 10.78 24 24v288c0 4.406 3.594 8 8 8s8-3.6 8-8V72c0-22.06-17.9-40-40-40H136c-22.1 0-40 17.94-40 40v288c0 4.4 3.59 8 8 8zm-48 48c0 4.406 3.594 8 8 8h448c4.406 0 8-3.594 8-8s-3.594-8-8-8H64c-4.41 0-8 3.6-8 8zm480-64h-16c-4.4 0-8 3.6-8 8s3.594 8 8 8h16c13.22 0 24 10.78 24 24v48c0 13.22-10.78 24-24 24H40c-13.22 0-24-10.78-24-24v-48c0-13.22 10.78-24 24-24h16c4.41 0 8-3.6 8-8s-3.59-8-8-8H40c-22.06 0-40 17.9-40 40v48c0 22.1 17.94 40 40 40h496c22.06 0 40-17.94 40-40v-48c0-22.1-17.9-40-40-40zm-325.7-66.3a7.994 7.994 0 0 0 11.31 0L288 219.3l66.34 66.34a7.994 7.994 0 0 0 11.31 0 7.994 7.994 0 0 0 0-11.31L299.3 208l66.34-66.34c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L288 196.7l-66.3-66.4c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L276.7 208l-66.4 66.3a8.15 8.15 0 0 0 0 11.4z" />
  </svg>
);

export default SvgXmarkToSlot;