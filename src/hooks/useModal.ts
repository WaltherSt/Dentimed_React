import { useAppDispatch, useAppSelector } from "../redux/hooks";

function useModal() {
  const modal = useAppSelector((state) => state.modalSlice.value);
  const dispatch = useAppDispatch();

  return { modal, dispatch };
}

export default useModal;
