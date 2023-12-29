"use client";

import { useCallback, useState } from "react";
import { ColorPicker, ColorPickerVariant } from "./components";

export default function Home() {
  const [color, setColor] = useState("#ffffff");

  const handleChange = useCallback((color) => {
    setColor(color);
  }, []);

  return (
    <>
      <ColorPicker
        color={color}
        onChange={handleChange}
        variant={ColorPickerVariant.Predefined}
      />

      <ColorPicker
        color={color}
        onChange={handleChange}
        variant={ColorPickerVariant.Free}
      />
    </>
  );
}
