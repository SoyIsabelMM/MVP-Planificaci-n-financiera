export function SquareAppApplication(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="5" height="5" x=".5" y=".5" rx="1"></rect>
        <rect width="5" height="5" x="8.5" y=".5" rx="1"></rect>
        <rect width="5" height="5" x=".5" y="8.5" rx="1"></rect>
        <rect width="5" height="5" x="8.5" y="8.5" rx="1"></rect>
      </g>
    </svg>
  );
}
