import { Checkbox } from "@nextui-org/react";

interface CheckBox {
  titulo: string;
}

const CheckBox: React.FC<CheckBox> = ({ titulo }) => {
  return (
    <div>
      <Checkbox size="md">
        <div className="capitalize text-lg">{titulo}</div>
      </Checkbox>
    </div>
  );
};

export default CheckBox;
