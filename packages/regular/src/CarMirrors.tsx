import * as React from 'react';
import { SVGProps } from 'react';

const SvgCarMirrors = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M176 288c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm224 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zM44.84 224H40c-13.25 0-24-10.7-24-24s10.75-24 24-24h44.57l29.73-85.07C126.7 55.63 160 32 197.4 32h181.2c36.5 0 70.7 23.63 83.1 58.93L491.4 176H536c13.3 0 24 10.7 24 24s-10.7 24-24 24h-4.8c8.1 14.1 12.8 30.5 12.8 48v184c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H80v56c0 13.3-10.75 24-24 24s-24-10.7-24-24V272c0-17.5 4.67-33.9 12.84-48zM197.4 80c-17 0-32.1 10.74-37.7 26.8L135.4 176h305.2l-24.3-69.2C410.7 90.74 395.6 80 378.6 80H197.4zM80 272v80h416v-80c0-26.5-21.5-48-48-48H128c-26.5 0-48 21.5-48 48z" />
    </svg>
);

export default SvgCarMirrors;
