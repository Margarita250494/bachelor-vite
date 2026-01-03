import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainButton from './buttons/MainButton'
import useNewsletter from '../utils/hooks/useNewsletter.hook'

function SubscribeNewsletter() {
  const {email, isSubmitting, handleEmailChange, subscribe} = useNewsletter();

  return (
    <div>
      <h6
        className="text-white font-serif text-[22px] font-bold
      tracking-[0.8px]"
      >Stay Update to our Newsletter
      </h6>
      <input
        type="text"
        inputMode="email"
        className="w-full s:w-75 my-4 mr-0 s:mt-5 s:mr-2 py-4 px-5.5
        text-white bg-gray-800 border-none rounded-[50px] outline-none
        font-serif text-[18px] tracking-[0.8px]"
        placeholder="Enter your email address"
        name="email"
        value={email}
        onChange={handleEmailChange}
        autoComplete="true"
      />
      <MainButton
        title="Subscribe"
        onClick={subscribe}
        disabled={isSubmitting}
        className="tracking-normal h-12.25 s:h-auto inline-block m:inline-block"

      />

      <ToastContainer
        autoClose={4000}
        limit={1}
        closeButton={false}
      />
    </div>
  );
}

export default SubscribeNewsletter;
