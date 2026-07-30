import { useEffect } from "react";

type TallyEmbedProps = {
  src: string;
  title: string;
  /** Full-viewport page embed vs inline section embed */
  variant?: "page" | "inline";
  height?: number | string;
};

function tallySrc(src: string) {
  const base = src.split("?")[0];
  return `${base}?transparentBackground=1`;
}

export function TallyEmbed({
  src,
  title,
  variant = "page",
  height = 900,
}: TallyEmbedProps) {
  const embedSrc = tallySrc(src);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]',
    );
    if (existing) {
      const w = window as Window & {
        Tally?: { loadEmbeds?: () => void };
      };
      w.Tally?.loadEmbeds?.();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [embedSrc]);

  if (variant === "inline") {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: height,
          height,
          background: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        <iframe
          data-tally-src={embedSrc}
          src={embedSrc}
          loading="lazy"
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title={title}
          allow="fullscreen"
          style={{
            position: "absolute",
            inset: 0,
            border: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 140px)",
        height: "calc(100vh - 140px)",
        background: "#fff",
      }}
    >
      <iframe
        data-tally-src={embedSrc}
        src={embedSrc}
        loading="lazy"
        width="100%"
        height="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title={title}
        allow="fullscreen"
        style={{
          position: "absolute",
          inset: 0,
          border: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
