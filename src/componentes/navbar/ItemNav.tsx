interface ItemNav {
  name: string;
}

const ItemNav: React.FC<ItemNav> = ({ name }) => {
  return (
    <a
      className="  my-3.5 px-4 font-normal text-sky-300 hover:text-dentimed-blue border-dentimed-blue  capitalize"
      href="home"
    >
      {name}
    </a>
  );
};

export default ItemNav;
