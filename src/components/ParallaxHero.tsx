import type { CSSProperties, ReactNode } from "react";
import { useParallax } from "../hooks/useParallax";

type ParallaxHeroProps = {
  src: string;
  alt?: string;
  /** Section min height */
  height?: number | string;
  objectPosition?: string;
  factor?: number;
  overlay?: string;
  children?: ReactNode;
  style?: CSSProperties;
  /** When true, image is edge-to-edge of the viewport width */
  fullBleed?: boolean;
};

/**
 * Full-bleed (or contained) hero/media band with scroll parallax on the image.
 */
export function ParallaxHero({
  src,
  alt = "",
  height = "56vh",
  objectPosition = "center",
  factor = 0.35,
  overlay,
  children,
  style,
  fullBleed = true,
}: ParallaxHeroProps) {
  const parallaxY = useParallax(factor);

  return (
    <section
      style={{
        position: "relative",
        minHeight: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...(fullBleed
          ? { width: "100vw", marginLeft: "calc(50% - 50vw)" }
          : {}),
        ...style,
      }}
    >
      <div
        aria-hidden={!alt}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: "130%",
            top: "-10%",
            objectFit: "cover",
            objectPosition,
            transform: `translate3d(0, ${parallaxY}px, 0)`,
            willChange: "transform",
          }}
        />
      </div>
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: overlay,
            zIndex: 1,
          }}
        />
      )}
      {children && (
        <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
          {children}
        </div>
      )}
    </section>
  );
}
