interface DogwoodLogoProps {
  size?: number;
  className?: string;
}

export default function DogwoodLogo({ size = 28, className = '' }: DogwoodLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="32" height="32" rx="7" fill="var(--blue-ridge-950)" />

      {/* Four dogwood petals — each a rounded teardrop radiating from center */}
      <g transform="translate(16 16)">
        {/* Top petal */}
        <path
          d="M0 -2.5 C-3 -5.5, -3.5 -11, 0 -13 C3.5 -11, 3 -5.5, 0 -2.5Z"
          fill="var(--dogwood-400)"
        />
        {/* Petal notch */}
        <circle cx="0" cy="-12" r="0.8" fill="var(--blue-ridge-950)" />

        {/* Right petal */}
        <path
          d="M2.5 0 C5.5 -3, 11 -3.5, 13 0 C11 3.5, 5.5 3, 2.5 0Z"
          fill="var(--dogwood-400)"
        />
        <circle cx="12" cy="0" r="0.8" fill="var(--blue-ridge-950)" />

        {/* Bottom petal */}
        <path
          d="M0 2.5 C3 5.5, 3.5 11, 0 13 C-3.5 11, -3 5.5, 0 2.5Z"
          fill="var(--dogwood-400)"
        />
        <circle cx="0" cy="12" r="0.8" fill="var(--blue-ridge-950)" />

        {/* Left petal */}
        <path
          d="M-2.5 0 C-5.5 3, -11 3.5, -13 0 C-11 -3.5, -5.5 -3, -2.5 0Z"
          fill="var(--dogwood-400)"
        />
        <circle cx="-12" cy="0" r="0.8" fill="var(--blue-ridge-950)" />

        {/* Center cluster */}
        <circle cx="0" cy="0" r="2.2" fill="var(--dogwood-600)" />
        <circle cx="0" cy="0" r="1.2" fill="var(--dogwood-300)" />
      </g>
    </svg>
  );
}
