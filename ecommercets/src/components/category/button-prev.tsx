import { useRef } from "react";
import { forwardRef, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type: "submit" | "button";
}
export type Ref = HTMLButtonElement;

export const FancyButtonPrev = forwardRef<Ref, Props>((props, ref) => {
  const inputEl = useRef<HTMLButtonElement | null>(null);

  const onButtonClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <button
      ref={ref}
      className="MyClassName"
      type={props.type}
      onClick={onButtonClick}
    >
      {props.children}
    </button>
  );
});
