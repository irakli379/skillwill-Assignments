import { useEffect, useState } from "react";

const mobile = 576;

const handleDevice = () => {
  const windowWidth = window.innerWidth;

  return windowWidth > mobile ? "DESKTOP" : "MOBILE";
};

const useDetectDevice = () => {
  const [device, setDevice] = useState(() => handleDevice());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDevice(handleDevice());
    });

    return window.removeEventListener("resize", () => {
      setDevice(handleDevice());
    });
  }, []);

  return device;
};
export default useDetectDevice;
