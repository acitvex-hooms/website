import { useEffect, useRef, type KeyboardEvent } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
};

export function ImageLightbox({
  src,
  alt,
  caption,
  onClose,
}: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      previousFocus.current?.focus();
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="xf-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? alt}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="xf-lightbox-backdrop"
        aria-label="Close image"
        onClick={onClose}
      />
      <div className="xf-lightbox-panel">
        <button
          ref={closeRef}
          type="button"
          className="xf-lightbox-close"
          onClick={onClose}
        >
          Close
        </button>
        <div className="xf-lightbox-stage">
          <img src={src} alt={alt} />
        </div>
        {caption ? <p className="xf-lightbox-caption">{caption}</p> : null}
      </div>
    </div>
  );
}
