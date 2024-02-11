import { IconProps } from ".";

export default function Share(props: IconProps) {
  return (
    <svg
      role="presentation"
      fill="none"
      focusable="false"
      strokeWidth="1.5"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      {...props}
    >
      <path
        d="M5.50006 7L10.0166 4.29005M5.50006 10L10.0166 12.7099M10.0166 4.29005C10.1604 5.53412 11.2174 6.5 12.5 6.5C13.8807 6.5 15 5.38071 15 4C15 2.61929 13.8807 1.5 12.5 1.5C11.1193 1.5 10 2.61929 10 4C10 4.09811 10.0057 4.19489 10.0166 4.29005ZM10.0166 12.7099C10.0057 12.8051 10 12.9019 10 13C10 14.3807 11.1193 15.5 12.5 15.5C13.8807 15.5 15 14.3807 15 13C15 11.6193 13.8807 10.5 12.5 10.5C11.2174 10.5 10.1604 11.4659 10.0166 12.7099ZM6 8.5C6 9.88071 4.88071 11 3.5 11C2.11929 11 1 9.88071 1 8.5C1 7.11929 2.11929 6 3.5 6C4.88071 6 6 7.11929 6 8.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}