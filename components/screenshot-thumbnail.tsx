"use client";

import { useState, useEffect } from "react";

export function ScreenshotThumbnail({ url, title }: { url: string; title: string }) {
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.data?.screenshot?.url) {
          setScreenshotUrl(data.data.screenshot.url);
        }
      })
      .catch(() => {});
  }, [url]);

  return (
    <>
      {screenshotUrl ? (
        <img
          src={screenshotUrl}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
    </>
  );
}
