"use client";
import { useEffect, useRef, useState } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";
export type Orientation = "portrait" | "landscape";

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

function getDeviceType(width: number): DeviceType {
  if (width < breakpoints.mobile) return "mobile";
  if (width < breakpoints.tablet) return "tablet";
  return "desktop";
}

function getOrientation(): Orientation {
  if (typeof window === "undefined") return "portrait";
  return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}

function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return (...args: Parameters<T>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export function useDeviceType(options?: { debounce?: number }) {
  const { debounce = 100 } = options || {};
  // Start with null to avoid SSR/client mismatch
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [orientation, setOrientation] = useState<Orientation | null>(null);

  const handleResize = useDebouncedCallback(() => {
    setDeviceType(getDeviceType(window.innerWidth));
    setOrientation(getOrientation());
  }, debounce);

  useEffect(() => {
    // Set initial values on mount (client only)
    setDeviceType(getDeviceType(window.innerWidth));
    setOrientation(getOrientation());
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [handleResize]);

  return {
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
    deviceType,
    orientation,
    isHydrating: deviceType === null || orientation === null,
  };
}

export function useIsMobile(options?: { debounce?: number }) {
  const { isMobile } = useDeviceType(options);
  return isMobile;
}
