export default function Logo({ height = 40, className = '' }: { height?: number; className?: string }) {
  return (
    <svg
      height={height}
      viewBox="0 0 220 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4b85e" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#a08030" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="40"
        fill="url(#goldGrad)"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="44"
        fontWeight="400"
        fontStyle="italic"
        letterSpacing="-1"
      >
        Mysélf
      </text>
      {/* Treble clef icon */}
      <g transform="translate(175, 5) scale(0.45)" fill="url(#goldGrad)">
        <path d="M44 0c-1.2 0-2.4.3-3.5.8C37 2.5 34.5 6 33.8 10c-.3 1.6-.3 3.2 0 4.8.4 2.2 1.3 4.2 2.6 5.9-1.8 3.5-3.2 7.2-4.1 11-.8 3.2-1.2 6.5-1.2 9.8 0 4.5 1 9 3 13 2.2 4.3 5.4 8 9.4 10.5.5.3 1 .6 1.5.8l.3-2c-3.4-2.2-6.2-5.5-8-9.3-1.8-3.8-2.7-8-2.7-12.2 0-3 .4-6 1.1-9 .8-3.4 2-6.7 3.6-9.8 1.8 1.5 4 2.3 6.3 2.3 5.5 0 10-4.5 10-10S51.1 5.8 45.6 5.8c-.5 0-1.1 0-1.6.2zm1.6 3c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7z"/>
      </g>
    </svg>
  );
}
