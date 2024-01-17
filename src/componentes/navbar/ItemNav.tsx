

interface ItemNav {
  name: string;
}

const ItemNav: React.FC<ItemNav> = ({ name }) => {
  return (
    <a
      className="  my-3.5 px-4 text-dentimed-blue border-dentimed-blue hover:scale-110"
      href=""
    >
      {name}
    </a>

  );
};

export default ItemNav;
