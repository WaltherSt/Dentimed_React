function Observations() {
  return (
    <div className="w-full">
      <div className="pb-2">
        <label className="text-lg font-normal">Observaciones</label>
      </div>

      <textarea
        placeholder="Haga aqui sus observaciones"
        className="focus:outline-0 resize-none rounded-md
        border-1 border-gray-400 p-3 w-full h-40"
      ></textarea>
    </div>
  );
}

export default Observations;
