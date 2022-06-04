import * as React from 'react';
import { SVGProps } from 'react';

const SvgMobileRetro = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
        <path d="M80 152c0-13.3 10.75-24 24-24h112c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H104c-13.25 0-24-10.7-24-24v-80zm-8 176c0-13.3 10.75-24 24-24 13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.25 0-24-10.7-24-24zm48 80c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24s10.75-24 24-24c13.3 0 24 10.7 24 24zm16-80c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm48 80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm16-80c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm48 80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM192 64c8.8 0 16 7.16 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.16-16-16s7.2-16 16-16h64zm64-64c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h192zm0 48H64c-8.84 0-16 7.16-16 16v384c0 8.8 7.16 16 16 16h192c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16z" />
    </svg>
);

export default SvgMobileRetro;
