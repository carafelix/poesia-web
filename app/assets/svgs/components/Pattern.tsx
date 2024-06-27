import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPattern = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <defs>
            <pattern
                id='a'
                width={21}
                height={21}
                patternUnits='userSpaceOnUse'
            >
                <path
                    fill='none'
                    stroke='hsla(360, 59%, 59%, 0.5)'
                    strokeLinecap='square'
                    strokeWidth={0.5}
                    d='M3.75 10h13.5M10.5 3.25v13.5'
                />
            </pattern>
        </defs>
        <rect
            width='800%'
            height='800%'
            fill='url(#a)'
            transform='translate(-20 -19)'
        />
    </svg>
)
export default SvgPattern
