import * as React from "react";
import { SVGProps } from "react";

const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m178.5 71.89-47.6 47.71-93.24-93.26c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l93.25 93.25L72 178.5C54.13 196.4 68.73 224 90.83 224h113.2c11.07 0 19.97-8.9 19.97-20V90.7c0-22.55-28.1-36.21-45.5-18.81zM208 204a4 4 0 0 1-3.994 3.996H90.83c-9 0-14.52-11.2-7.529-18.2l106.5-106.6C197 76 208 81.95 208 90.73V204zm99.1 20h113.3c22.59 0 36.25-28.08 18.85-45.47l-47.69-47.65 93.23-93.23c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L381.1 119.6 333.5 72C315.6 54.13 288 68.73 288 90.84v113.2c0 11.06 8.9 19.96 19.1 19.96zm-4-133.16c0-9.008 11.21-14.52 18.2-7.531l106.6 106.5c7.195 7.18 1.252 18.18-7.537 18.18h-113.3a4 4 0 0 1-3.998-3.992V90.84zM204 288H90.7c-22.59 0-36.25 28.08-18.85 45.47l47.69 47.65-93.23 93.23a7.994 7.994 0 0 0 0 11.31c1.6 1.54 3.63 2.34 5.69 2.34s4.094-.781 5.656-2.344l93.23-93.23L178.5 440c17.9 17.9 45.5 3.3 45.5-18.8V307.1c0-10.2-8.9-19.1-20-19.1zm4 133.2c0 9-11.21 14.52-18.2 7.527L83.19 322.2c-8.09-8.1-1.25-19.1 7.54-19.1h113.3a4 4 0 0 1 3.998 3.992V421.2zm184.4-40.1 47.6-47.6c17.9-17.9 3.3-45.5-18.8-45.5H308c-11.1 0-20 8.9-20 19.1v113.3c0 22.59 28.07 36.25 45.46 18.84l47.65-47.68 93.23 93.23c1.56 2.41 3.56 3.21 5.66 3.21s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L392.4 381.1zm-70.2 47.7c-7.184 7.195-18.18 1.25-18.18-7.539V307.1c0-2.203 1.793-4 3.994-4h113.2c9 0 14.52 11.2 7.529 18.2L322.2 428.8z" />
  </svg>
);

export default SvgMinimize;