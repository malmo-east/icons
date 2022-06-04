import * as React from 'react';
import { SVGProps } from 'react';

const SvgChestnut = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M302.9 99.43c-25.37-20.56-49.36-39.98-66.48-61.41C233.2 34.01 228.6 32 224 32s-9.2 2.01-12.5 6.02c-17.1 21.43-41.1 40.85-66.4 61.41C80.44 151.7 0 216.8 0 352c0 70.7 57.31 128 128 128h192c70.69 0 128-57.3 128-127.1 0-136.1-80.4-201.2-145.1-253.47zM320 432H128c-44.11 0-80-35.88-80-79.98v-.023h352v.023c0 44.08-35.9 79.98-80 79.98z" />
    </svg>
);

export default SvgChestnut;
