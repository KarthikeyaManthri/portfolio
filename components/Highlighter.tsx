import React, { ReactElement } from "react";
import { RoughNotation, types } from "react-rough-notation";

interface HightlighterProps {
  color: string;
  children: any;
  type?:
    | "underline"
    | "box"
    | "circle"
    | "highlight"
    | "strike-through"
    | "crossed-off"
    | "bracket";
  strokeWidth?: number;
  padding?:
    | number
    | [number, number, number, number]
    | [number, number]
    | undefined;
  multiline?: boolean;
}

export const HighLighter = (props: HightlighterProps) => {
  const {
    color,
    children,
    type = "highlight",
    strokeWidth = 1,
    padding = [0, 2],
    multiline = true,
  } = props;
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type={type}
      multiline={multiline}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
      strokeWidth={strokeWidth}
      padding={padding}
      brackets={["left", "right"]}
    >
      {children}
    </RoughNotation>
  );
};
