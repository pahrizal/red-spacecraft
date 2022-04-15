import * as React from 'react'
import { SVGProps } from 'react'

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="search-Filled">
      <path d="M21.707,20.293l-4.539-4.539a8.527,8.527,0,1,0-1.414,1.414l4.539,4.539a1,1,0,0,0,1.414-1.414ZM4,10.5A6.5,6.5,0,1,1,10.5,17,6.508,6.508,0,0,1,4,10.5Z" />
    </g>
  </svg>
)

export default SearchIcon
