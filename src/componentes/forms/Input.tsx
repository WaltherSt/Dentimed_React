interface SetInput {
  placeholder: string;
  type: string;
}
const Input: React.FC<SetInput> = ({ placeholder, type }) => {
  return <input className="p-2" type={type} placeholder={placeholder} />;
};
export default Input;
