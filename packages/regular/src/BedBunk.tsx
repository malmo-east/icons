import * as React from 'react';
import { SVGProps } from 'react';

const SvgBedBunk = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M152 144c39.8 0 72-32.2 72-72S191.8 0 152 0 80 32.25 80 72s32.2 72 72 72zm0-96c13.25 0 24 10.75 24 24s-10.8 24-24 24-24-10.75-24-24 10.8-24 24-24zM464 0H272c-8.8 0-16 7.163-16 16v144H48V24C48 10.75 37.25 0 24 0S0 10.75 0 23.1V488c0 13.3 10.75 24 23.1 24S48 501.3 48 488v-24h480v24c0 13.3 10.7 24 24 24s24-10.7 24-24V128C576 50.12 525.9 0 464 0zm64 416H304V304h160c35.38 0 64 28.62 64 64v48zm0-139.8c-18.7-13.1-41.1-20.2-64-20.2H272c-8.9 0-16 7.1-16 16v144H48V208h480v68.2zm0-116.2H304V48h160c35.38 0 64 28.62 64 64v48zM152 400c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72zm0-96c13.25 0 24 10.75 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24z" />
    </svg>
);

export default SvgBedBunk;
