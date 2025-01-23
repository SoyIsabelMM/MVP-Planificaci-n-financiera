export function CreditCard(props) {
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
        <rect width="13" height="9.5" x=".5" y="2.25" rx="1"></rect>
        <path d="M.5 5.75h13m-4 3.5H11"></path>
      </g>
    </svg>
  );
}
