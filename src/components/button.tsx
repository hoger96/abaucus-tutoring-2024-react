export const CommonButton = (props: {
  value: number;
  onClick: (event: any) => void
}) => {
  const { value, onClick } = props;
  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  );
};