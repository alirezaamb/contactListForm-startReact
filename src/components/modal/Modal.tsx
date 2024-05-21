import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../../api/const';
import { GetContacts } from '../../api/get/Get';
import { ContactType } from '../../utils/type';

const Modal = ({
  deletedObjectId,
  setContacts,
  setIsHiddenModal,
}: {
  deletedObjectId: number | null;
  setContacts: (b: ContactType[]) => void;
  setIsHiddenModal: (b: boolean) => void;
}) => {
  const deleteHandler = async () => {
    await axios.delete(`${BASE_URL}/${deletedObjectId}`);
    const response: AxiosResponse = await GetContacts();
    setContacts(response.data);
    setIsHiddenModal(false);
  };
  console.log(deletedObjectId);

  return (
    <>
      <div
        onClick={() => setIsHiddenModal(false)}
        className=" fixed w-full h-full bg-gray-700 opacity-70 blur-xl z-10"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-300  w-80 h-44 p-5 rounded flex flex-col items-center gap-14">
        <h3 className="text-gray-700">آیا می‌خواهید این مخاطب را حذف کنید؟</h3>
        <div className="flex gap-14">
          <button
            className="px-5 font-semibold py-1 rounded-lg bg-gray-500 text-white hover:bg-gray-400 transition-all"
            onClick={() => setIsHiddenModal(false)}
          >
            لغو
          </button>
          <button
            className="px-5 font-semibold py-1 rounded-lg bg-red-500 text-white hover:bg-red-400 transition-all"
            onClick={deleteHandler}
          >
            تایید
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
