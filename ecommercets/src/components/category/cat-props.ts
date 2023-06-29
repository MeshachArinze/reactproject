type Props = {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};


export type  AppProps = {
  children?: React.ReactNode;
  childrenElement: JSX.Element;
  style?: React.CSSProperties; 
  onChange?: React.FormEventHandler<HTMLInputElement>; 
  props: Props & React.ComponentPropsWithoutRef<"button">;
}