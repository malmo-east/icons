import * as React from 'react';
import { SVGProps } from 'react';

const SvgChessKingPiece = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
        <path d="M249.6 435.3 224 416v-24c-.125-10.38-6.875-19.5-16.88-22.5-3.75-25-6.375-50.25-6.375-75.5v-38H208c8.8 0 16-7.2 16-16v-16c0-8.875-7.125-16-16-16h-3.125l26.1-80.38a24.438 24.438 0 0 0 1.181-7.495C233.1 107.3 222.8 96 209 96h-64.25V64h16c8.8 0 16-7.2 16-15.1S169.6 32 160.8 32h-16V15.1c0-8.8-7.2-15.1-16-15.1s-16 7.2-16 15.1V32H96.86c-8.8 0-16.11 7.2-16.11 15.1s7.2 16.9 16 16.9h16v32H48.5c-13.29 0-24.02 10.8-24.02 23.1 0 2.567.416 5.155 1.269 7.671L52.75 208H48c-8.88 0-16 7.1-16 16v16c0 8.8 7.16 16 16 16h8.75v38c0 25.12-2.5 50.25-6.375 75.12C39.88 371.8 32 380.8 32 392v24L6.37 435.26C2.358 438.3 0 442.1 0 448v48c0 8.8 7.163 16 16 16h224c8.837 0 16-7.163 16-16v-48c0-5.9-2.4-9.7-6.4-12.7zM175.8 144l-21.5 64h-50.9l-21.5-64h93.9zm-17.4 224H99.12c3.375-24.5 5.625-49.25 5.625-73.1V256h48v38c.055 24.8 2.255 49.5 5.655 74zM48 464l32-24v-24h96v24l32 24H48z" />
    </svg>
);

export default SvgChessKingPiece;
