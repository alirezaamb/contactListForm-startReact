import { useEffect, useState } from 'react';
import { PostContact } from '../../api/post/Post';
import { ContactType } from '../../utils/type';
import { PatchContact } from '../../api/patch/patch';

const AddContact = ({
  // setIsUpdate,
  setContacts,
  editedObject,
  submitButton,
  setSubmitButton,
}: {
  // setIsUpdate: (prev: any) => void;
  setContacts: React.Dispatch<React.SetStateAction<ContactType[]>>;
  editedObject: ContactType;
  submitButton: string;
  setSubmitButton: (b: string) => void;
}) => {
  const [enterdName, setEnterdName] = useState(editedObject.Fname || '');
  const [enterdLastName, setEnterdLastName] = useState(
    editedObject.Lname || ''
  );
  const [enterdPhoneNumber, setEnterdPhoneNumber] = useState(
    editedObject.phone || ''
  );
  const [enterdRelative, setEnteredRlative] = useState(
    editedObject.relative || ''
  );
  const [enterdEmail, setEnterdEmail] = useState(editedObject.email || '');
  const [validateName, setValidateName] = useState('');
  const [validateLastName, setValidateLastName] = useState('');
  const [validatePhoneNumber, setValidatePhoneNumber] = useState('');
  const [validateRelative, setValidateRelative] = useState('');
  const [validateEmail, setValidateEmail] = useState('');

  useEffect(() => {
    if (Object.keys(editedObject).length !== 0) {
      setEnterdEmail(editedObject.email);
      setEnteredRlative(editedObject.relative);
      setEnterdName(editedObject.Fname);
      setEnterdLastName(editedObject.Lname);
      setEnterdPhoneNumber(editedObject.phone);
    }
  }, [editedObject]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    {
      if (
        enterdName.trim() !== '' &&
        enterdLastName.trim() !== '' &&
        enterdPhoneNumber.trim() !== '' &&
        enterdRelative.trim() !== 'انتخاب کنید' &&
        enterdEmail.trim() !== ''
      ) {
        const data: ContactType = {
          Fname: enterdName,
          Lname: enterdLastName,
          phone: enterdPhoneNumber,
          relative: enterdRelative,
          email: enterdEmail,
          id: editedObject ? editedObject.id : Date.now(),
        };
        console.log(data);
        if (!editedObject.id) {
          PostContact({ data });
          setContacts((prev) => [...prev, data]);
        } else {
          PatchContact({ data }).then(() => {
            setContacts((prev: ContactType[]) =>
              prev.map((contact) =>
                contact.id === editedObject.id ? { ...data } : contact
              )
            );
            setSubmitButton('اضافه کردن');
          });
        }

        setEnterdEmail('');
        setEnterdLastName('');
        setEnterdPhoneNumber('');
        setEnteredRlative('');
        setEnterdName('');

        // setIsUpdate((prev) => !prev);
      } else {
        enterdName.trim() === '' &&
          setValidateName('لطفا نام خود را وارد کنید');
        enterdLastName.trim() === '' &&
          setValidateLastName('لطفا نام خانوادگی خود را وارد کنید');
        enterdPhoneNumber.trim() === '' &&
          setValidatePhoneNumber('لطفا موبایل خود را وارد کنید');
        enterdRelative.trim() !== 'انتخاب کنید' &&
          setValidateRelative('لطفا نسبت خود را انتخاب کنید');
        enterdEmail.trim() === '' &&
          setValidateEmail('لطفا ایمیل خود را وارد کنید');
      }
    }
  };

  return (
    <div className="lg:w-1/2 sm:w-full  flex flex-col gap-3">
      <h2 className="flex justify-center font-bold text-xl">
        اضافه / ویرایش کاربران
      </h2>
      <form
        className="shadow-md p-3 flex flex-col gap-1"
        onSubmit={submitHandler}
      >
        <label>
          نام:
          <br />
          <input
            value={enterdName}
            className="px-3 py-2 shadow w-full p-1 rounded outline-none"
            type="text"
            placeholder="نام..."
            onChange={(e) => setEnterdName(e.target.value)}
          />
        </label>
        <p className="text-red-500 text-sm">{validateName}</p>
        <br />
        <label>
          نام خانوادگی:
          <br />
          <input
            value={enterdLastName}
            className="px-3 py-2 shadow w-full p-1 rounded outline-none"
            type="text"
            placeholder="نام خانوادکی..."
            onChange={(e) => setEnterdLastName(e.target.value)}
          />
        </label>
        <p className="text-red-500 text-sm">{validateLastName}</p>
        <br />
        <label>
          شماره موبایل:
          <br />
          <input
            value={enterdPhoneNumber}
            className="px-3 py-2 shadow w-full p-1 rounded placeholder-right outline-none"
            type="number"
            placeholder="شماره موبایل..."
            onChange={(e) => setEnterdPhoneNumber(e.target.value)}
          />
        </label>
        <p className="text-red-500 text-sm">{validatePhoneNumber}</p>
        <br />
        <label>
          نسبت:
          <br />
          <select
            name="نسبت"
            className="shadow-md w-full p-1 rounded outline-none"
            value={enterdRelative}
            onChange={(e) => setEnteredRlative(e.target.value)}
          >
            <option defaultChecked value="">
              انتخاب کنید
            </option>
            <option value="دوست">دوست</option>
            <option value="همکار">همکار</option>
          </select>
        </label>
        <p className="text-red-500 text-sm">{validateRelative}</p>
        <br />
        <label>
          ایمیل:
          <br />
          <input
            value={enterdEmail}
            className="px-3 py-2 shadow w-full p-1 rounded outline-none"
            type="email"
            placeholder="ایمیل..."
            onChange={(e) => setEnterdEmail(e.target.value)}
          />
        </label>
        <p className="text-red-500 text-sm">{validateEmail}</p>
        <br />
        <button
          type="submit"
          className="bg-gray-500 text-white rounded px-2 py-2 hover:bg-gray-600 sm:w-full md:w-fit"
        >
          {submitButton}
        </button>
      </form>
    </div>
  );
};
export default AddContact;
