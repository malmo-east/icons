import * as React from 'react';
import { SVGProps } from 'react';

const SvgCrow = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M416 103.1c0-12.36 10.7-24 24-24s24 11.64 24 24c0 14.2-10.7 24-24 24s-24-9.8-24-24zM111.2 384l-72.03 58.6c-10.28 7.5-25.42 6.8-33.784-3.4-8.368-10.3-6.817-25.4 3.463-33.8L336 139.1V104C336 46.56 382.6 0 440 0c29.5 0 56.1 12.28 75 32h43c38.8 0 72.6 26.39 82 64l-96 24v72c0 87.1-59.1 162.1-139.8 184.8l42 102.1c5 12.2-.8 26.2-13.1 31.3-12.2 5-26.2-.8-31.3-13.1l-46.6-114c-1.1 0-2.1.9-3.2.9h-40.9l39.1 94.9c5 12.2-.8 26.2-13.1 31.3-12.2 5-26.2-.8-31.3-13.1L259.2 384h-148zM352 336c79.5 0 144-64.5 144-144.9v-88c0-30.03-25.1-56-56-56s-56 25.97-56 56v58.8L170.1 336H352zm8-208.9c13.3 0 24 11.6 24 24v24.1c0 86.5-60.2 161.3-144.7 178.9l-130.2 29.3-10.23-46.8 130.23-28.5c62.4-13.7 106.9-69 106.9-132.9v-24.1c0-12.4 10.7-24 24-24z" />
    </svg>
);

export default SvgCrow;
