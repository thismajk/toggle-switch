"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className={`${styles.wrapper} ${className ?? ""}`}>
        <input type="checkbox" ref={ref} className={styles.input} {...props} />
        <span className={styles.slider} />
      </label>
    );
  }
);

Switch.displayName = "Switch";
