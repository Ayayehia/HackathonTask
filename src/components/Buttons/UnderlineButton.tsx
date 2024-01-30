interface UnderlineButtonProps {
  Text: string;
}
const UnderlineButton: React.FC<UnderlineButtonProps> = ({ Text }) => {
  return (
    <button className="text-white underline focus:outline-none">{Text}</button>
  );
};

export default UnderlineButton;
