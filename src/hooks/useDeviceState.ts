/* eslint-disable @typescript-eslint/naming-convention */
import { useState, useEffect } from 'react';
import { device } from '../style/util/media-query';

export type DeviceStateProps = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopM: boolean;
};

export function useDeviceState(): DeviceStateProps {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDesktopM, setIsDesktopM] = useState(false);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia(device.desktop);
    const desktopMMediaQuery = window.matchMedia(device.desktopM);
    const tabletMediaQuery = window.matchMedia(device.tablet);

    // Init device state onMount
    if (window.matchMedia(device.desktopM).matches) setIsDesktopM(true);
    if (window.matchMedia(device.desktop).matches) setIsDesktop(true);
    if (window.matchMedia(device.tablet).matches) setIsTablet(true);
    else setIsMobile(true);

    function onTabletChangeState(event: MediaQueryListEvent): void {
      if (event.matches) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsTablet(false);
      }
    }

    function onDesktopMChangeState(event: MediaQueryListEvent): void {
      if (event.matches) setIsDesktopM(true);
      else setIsDesktopM(false);
    }

    function onDesktopChangeState(event: MediaQueryListEvent): void {
      if (event.matches) setIsDesktop(true);
      else setIsDesktop(false);
    }

    desktopMediaQuery.addEventListener('change', onDesktopChangeState);
    desktopMMediaQuery.addEventListener('change', onDesktopMChangeState);
    tabletMediaQuery.addEventListener('change', onTabletChangeState);

    return () => {
      desktopMediaQuery.removeEventListener('change', onDesktopChangeState);
      desktopMMediaQuery.removeEventListener('change', onDesktopMChangeState);
      tabletMediaQuery.removeEventListener('change', onTabletChangeState);
    };
  }, []);

  return { isMobile, isTablet, isDesktop, isDesktopM };
}

export default useDeviceState;
