import * as React from 'react';
import { SVGProps } from 'react';

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M508.3 304.9 447.05 56.2C443.5 41.1 430.7 31.1 416 31.1H96c-14.69 0-27.47 10-31.03 24.25L3.715 304.9A127.91 127.91 0 0 0 0 335.5V416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80.47c0-10.33-1.2-20.63-3.7-30.63zM108.6 80h294.9l51.2 208H368a23.964 23.964 0 0 0-21.47 13.28L321.2 352H190.8l-25.3-50.7c-4.1-8.2-12.4-13.3-21.5-13.3H57.32L108.6 80zM464 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80h81.16l25.38 50.72C158.6 394.9 166.9 400 176 400h160c9.094 0 17.41-5.125 21.47-13.28L382.8 336H464v80z" />
    </svg>
);

export default SvgInbox;
