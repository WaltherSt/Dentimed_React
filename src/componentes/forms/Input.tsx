interface SetInput {
  placeholder?: string;
  type: string;
  name: string;
}
const Input: React.FC<SetInput> = ({ placeholder, type, name }) => {
  return (
    <input
      className="p-2 w-full"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};
export default Input;
