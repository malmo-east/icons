import * as React from 'react';
import { SVGProps } from 'react';

const SvgInboxOut = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M464 320h-96a23.964 23.964 0 0 0-21.47 13.28L321.2 384H190.8l-25.38-50.72C161.4 325.1 153.1 320 144 320H32c-17.67 0-32 14.33-32 32v96c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80c0-26.5-21.5-48-48-48zm0 128c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80h81.16l25.38 50.72C158.6 426.9 166.9 432 176 432h160c9.094 0 17.41-5.125 21.47-13.28L382.8 368H464v80zM169.6 152.3 232 85.13V296c0 13.3 10.8 24 24 24s24-10.75 24-24V85.13l62.41 67.21C347.2 157.4 353.6 160 360 160a23.99 23.99 0 0 0 16.34-6.406c9.688-9.031 10.25-24.22 1.25-33.94l-104-112c-9.125-9.75-26.06-9.75-35.19 0l-104 112c-9 9.719-8.438 24.91 1.25 33.94 9.75 9.006 24.85 8.506 33.95-1.294z" />
    </svg>
);

export default SvgInboxOut;
