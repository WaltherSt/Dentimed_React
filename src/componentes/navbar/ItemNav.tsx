

interface ItemNav {
  name: string;
}

const ItemNav: React.FC<ItemNav> = ({ name }) => {
  return (
    <a
      className="  my-3.5 px-4 text-dentimed-blue border-dentimed-blue font-medium hover:scale-110  hover:transition duration-400 "
      href=""
    >
      {name}
    </a>

  );
};

export default ItemNav;
