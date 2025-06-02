interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="18" fill="url(#gradient)" opacity="0.9"/>

      {/* Flowing lines representing AI waves */}
      <path
        d="M8 16c4 0 6-2 8 0s4 2 8 0 6-2 8 0"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M8 20c4 0 6-2 8 0s4 2 8 0 6-2 8 0"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M8 24c4 0 6-2 8 0s4 2 8 0 6-2 8 0"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />

      {/* Central AI brain icon */}
      <circle cx="20" cy="20" r="4" fill="white" opacity="0.9"/>
      <circle cx="18" cy="18" r="1" fill="currentColor"/>
      <circle cx="22" cy="18" r="1" fill="currentColor"/>
      <path d="M18 22c1 1 3 1 4 0" stroke="currentColor" strokeWidth="1" fill="none"/>

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="50%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
