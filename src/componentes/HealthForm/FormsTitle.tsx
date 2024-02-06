interface FormsTitle {
  principal: string;
}

const FormsTitle: React.FC<FormsTitle> = ({ principal }) => {
  return (
    <div
      className="uppercase font-bold text-xl w-full py-5 pt-10 border-b-1 
      text-dentimed-blue"
    >
      {principal}
    </div>
  );
};

export default FormsTitle;
