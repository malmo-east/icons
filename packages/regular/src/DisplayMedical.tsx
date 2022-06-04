import * as React from 'react';
import { SVGProps } from 'react';

const SvgDisplayMedical = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M368 176h-48v-48c0-8.801-7.199-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V224c0 8.797 7.199 15.1 16 15.1h48v48c0 9.7 7.2 16.9 16 16.9h32c8.801 0 16-7.2 16-16v-48h48c8.8-.9 16-7.2 16-16v-32.9c0-7.9-7.2-15.1-16-15.1zM512 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h148.3l-9.6 48H152c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-50.73l-9.57-48H512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM251.7 464l9.6-48h53.46l9.6 48H251.7zM528 352c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16v288z" />
    </svg>
);

export default SvgDisplayMedical;
