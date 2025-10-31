'use client';

import { useEffect, useState } from 'react';

interface QuantityInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
}

export function QuantityInput({ value = 1, onChange, min = 1 }: QuantityInputProps) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const nextValue = (newValue: number) => {
    const safeValue = Math.max(min, newValue);
    if (onChange) {
      onChange(safeValue);
    } else {
      setInternalValue(safeValue);
    }
  };

  return (
    <div className="flex h-12 items-center gap-6 bg-gray px-4">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="text-black/40 transition hover:text-accent"
        onClick={() => nextValue((onChange ? value : internalValue) - 1)}
      >
        -
      </button>
      <span className="text-sm font-bold uppercase tracking-[1px]">
        {onChange ? value : internalValue}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="text-black/40 transition hover:text-accent"
        onClick={() => nextValue((onChange ? value : internalValue) + 1)}
      >
        +
      </button>
    </div>
  );
}
