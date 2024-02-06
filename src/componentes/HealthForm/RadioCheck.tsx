import { RadioGroup, Radio } from "@nextui-org/react";

interface RadioCheck {
  question: string;
}

const RadioCheck: React.FC<RadioCheck> = ({ question }) => {
  return (
    <>
      <div>
        <div className="text-lg pb-2">{question}</div>
        <RadioGroup defaultValue="no">
          <Radio value="si" disableAnimation>
            Si
          </Radio>
          <Radio value="no" disableAnimation>
            No
          </Radio>
        </RadioGroup>
      </div>
    </>
  );
};

export default RadioCheck;