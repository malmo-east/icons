import * as React from 'react';
import { SVGProps } from 'react';

const SvgMugMarshmallows = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M400 160.1H32c-17.75 0-32 14.25-32 32V384c0 53 43 96 96 96h192c53 0 96-42.95 96-95.95l16 .013c61.75 0 112-50.19 112-111.9S461.8 160.1 400 160.1zM336 384c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V208h55.37l.63 48.3c.2 13.2 11 23.7 24.2 23.7.094 0-.11 0 0 0 13.2-.2 24-11.1 23.8-24.3l-.6-47.7H336v176zm64-48h-16V208h16c35.25 0 64 28.75 64 64s-28.7 64-64 64zM200.8 89.32 249.2 41c12.5-12.5 32.75-12.5 45.25 0l48.5 48.38c10.55 10.5 11.65 26.42 4.55 38.62h-151c-7.3-12.2-6.1-28.18 4.3-38.68zm-38.7 38.98L32 128.2V64.38c0-17.62 14.25-32 32-32h112.3c10.12 0 18.75 5.125 24.62 12.38L178.5 67.25c-16.6 16.5-21.9 40.05-16.4 61.05z" />
    </svg>
);

export default SvgMugMarshmallows;
