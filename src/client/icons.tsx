/**
 * Inline SVG icons for GitChat. Keeping them local avoids another runtime
 * dependency and lets every glyph inherit the DSH theme's currentColor.
 */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Svg({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

/** Git branch: a trunk with a forked node. */
export function BranchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <path d="M6 7.2v9.6" />
      <path d="M18 11.2c0 3.1-2.4 4.8-6 5.2" />
      <path d="M6 12.2c4.2 0 7.2 0 9.6-1.2" />
    </Svg>
  )
}

/** Refresh arrow. */
export function RefreshIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 11a8 8 0 1 0-2.3 5.7" />
      <path d="M20 4v7h-7" />
    </Svg>
  )
}

/** Fit-to-view corners. */
export function FitIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 4H4v5" />
      <path d="M15 4h5v5" />
      <path d="M9 20H4v-5" />
      <path d="M15 20h5v-5" />
    </Svg>
  )
}

/** Re-layout: layered nodes. */
export function LayoutIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="8" y="3" width="8" height="5" rx="1.5" />
      <rect x="2" y="16" width="7" height="5" rx="1.5" />
      <rect x="15" y="16" width="7" height="5" rx="1.5" />
      <path d="M12 8v4" />
      <path d="M5.5 16v-2h13v2" />
    </Svg>
  )
}

/** Archive box. */
export function ArchiveIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8.5h16v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-10Z" />
      <path d="M3 4h18v4.5H3z" />
      <path d="M10 13h4" />
    </Svg>
  )
}

/** Restore arrow out of a box. */
export function RestoreIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 9.5h16v9A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-9Z" />
      <path d="M3 5h18v4.5H3z" />
      <path d="M12 17v-5" />
      <path d="m9.5 14.5 2.5-2.5 2.5 2.5" />
    </Svg>
  )
}

/** Download arrow. */
export function DownloadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 20h16" />
    </Svg>
  )
}

/** Save / floppy. */
export function SaveIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 4h12l4 4v12H4z" />
      <path d="M8 4v5h8V4" />
      <path d="M8 20v-6h8v6" />
    </Svg>
  )
}

/** Open in a new location. */
export function OpenIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 4h6v6" />
      <path d="m20 4-9 9" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </Svg>
  )
}

/** Copy. */
export function CopyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="8" y="8" width="11" height="12" rx="1.5" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v10A1.5 1.5 0 0 0 5.5 17H8" />
    </Svg>
  )
}

/** Close. */
export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  )
}

/** Chevron right. */
export function ChevronIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 5 7 7-7 7" />
    </Svg>
  )
}

/** Warning triangle. */
export function WarningIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.8 21 20H3z" />
      <path d="M12 9v5" />
      <path d="M12 17.2v.1" />
    </Svg>
  )
}

/** Check. */
export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Svg>
  )
}

/** Small spinner; animation lives in CSS. */
export function SpinnerIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <Svg size={size} className={['gc-spin', className].filter(Boolean).join(' ')} {...props}>
      <path d="M12 3a9 9 0 1 0 9 9" />
    </Svg>
  )
}

/** Empty-tree illustration used by the empty state. */
export function EmptyTreeIcon({ size = 120, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M60 22v26M60 48c0 12-19 8-19 22v10M60 48c0 12 19 8 19 22v10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.45" />
      <circle cx="60" cy="18" r="8" fill="currentColor" opacity="0.9" />
      <circle cx="41" cy="86" r="7" fill="none" stroke="currentColor" strokeWidth="2.4" opacity="0.6" />
      <circle cx="79" cy="86" r="7" fill="none" stroke="currentColor" strokeWidth="2.4" opacity="0.6" />
      <path d="M35 104h12M73 104h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.3" />
      <path d="M52 40h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.25" />
      <path d="M50 58h20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
