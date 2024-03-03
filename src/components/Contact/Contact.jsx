import { IoMail, IoHome } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="section flex flex-col  items-center ">
      <h1 className="text-4xl text-blue-700 font-bold m-6">Contact</h1>
      <div className="flex-col gap-[2em] mb-6 md:flex md:flex-row">
        <div className=" h-[169px] box-shadow rounded-lg flex flex-col items-center justify-center  p-3 my-4 md:my-0 md:w-[400px]">
          <IoMail className="text-blue-700 text-4xl" />
          <p className="text-2xl text-gray-700">monarchofnobitches@gmail.com</p>
        </div>
        <div className=" h-[169px] box-shadow rounded-lg flex flex-col items-center justify-center  p-3 md:w-[400px]">
          <IoHome className="text-blue-700 text-4xl" />
          <p className="text-2xl text-gray-700">Streetss</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
