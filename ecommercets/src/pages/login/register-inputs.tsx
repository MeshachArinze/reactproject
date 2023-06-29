export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
};

export const MyInput = ({ value, onChange }: Props) => {
  return <input type="text" value={value} onChange={onChange} />;
};
