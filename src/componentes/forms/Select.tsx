interface SetSelect {
  items: string[];
}
const Select: React.FC<SetSelect> = ({ items }) => {
  return (
    <select className="p-2" name="" id="">
      {items.map((element) => (
        <option value={element} key={element}>{element}</option>
      ))}
    </select>
  );
};
export default Select;
