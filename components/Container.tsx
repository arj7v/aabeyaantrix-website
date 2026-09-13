import type { ReactNode } from "react";

/** Centred content column with responsive gutters. Max width keeps body text
 *  from running past a comfortable measure. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
