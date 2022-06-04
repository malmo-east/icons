import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessageText = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M344 112H168c-13.2 0-24 10.8-24 24s10.75 23.1 24 23.1l64 .9v136c0 13.3 10.8 24 24 24s24-10.75 24-24V160h64c13.25 0 24-10.75 24-23.1S357.3 112 344 112zM448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm16 352c0 8.75-7.25 16-16 16H288l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16v288z" />
    </svg>
);

export default SvgMessageText;
