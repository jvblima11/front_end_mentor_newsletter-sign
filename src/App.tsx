import "./App.css";
import illustration from "./assets/images/illustration-sign-up-desktop.svg";
import illustration_mobile from "./assets/images/illustration-sign-up-mobile.svg";
import icon_list from "./assets/images/icon-list.svg";
import icon_success from "./assets/images/icon-success.svg";
import { useState } from "react";

function App() {
  // Email Fucntions
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); 
  const [isSubscribed, setIsSubscribed] = useState(false); //começa falso pq nenhum email entra no site ja cadastrado

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Resetar o estado de validade do email sempre que o usuário digitar algo
  };

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsSubscribed(true);
  };

  const dismissHandle =  () =>{

  }

  return (
    <>
      {/* flex flex-row justify-evenly p-5 */}
      <body className="flex justify-center py-0">
      {!isSubscribed ?(
        <div className=" bg-White rounded-[12px] flex">
        <div className="my-10 mx-4 ">
          <h1 className="text-4xl py-4 font-roboto text-Dark-Slate-Grey font-bold">
            {" "}
            Stay updated!
          </h1>

          <p className="py-4 font-roboto-regular text-xl text-left">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div>
            <div className="flex flex-row items-center py-2">
              <img className="size-7" src={icon_success} alt="icon_success" />
              <p className="ml-4">
                Product discovery and building what matters
              </p>
            </div>
            <div className="flex flex-row items-center py-2">
              <img className="size-7" src={icon_success} alt="icon_success" />
              <p className="ml-4">
                Measuring to ensure updates are a success
              </p>
            </div>
            <div className="flex flex-row items-center py-2">
              <img className="size-7" src={icon_success} alt="icon_success" />
              <p className="ml-4">And much more!</p>
            </div>
          </div>

          <div className="my-4 flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-left text-sm my-1 text-Dark-Slate-Grey font-bold ">
                Email address
              </p>
              {!isValidEmail && (
                <span className="text-tomate text-sm mt-1">
                  Valid Email required
                </span> 
              )}
            </div>
            <input
              type="text"
              placeholder="email@company.com"
              className="border-[1px] border-Grey p-1 h-12 rounded-[8px]" 
              onChange={handleEmailChange}
            />

            <button
              className=" text-White bg-Dark-Slate-Grey my-4 rounded-[8px] h-12 font-roboto font-normal hover:bg-tomate transition duration-300"
              onClick={handleSubscribe}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="m-4">
          <img src={illustration} alt="nlw icon" />
        </div>
      </div>
      ):(
        <div className="bg-White flex flex-col rounded-[24px] p-8 w-3/12">
          <img className="size-14" src={icon_success} alt="icon_success" />
          <h1 className="text-4xl py-4 font-roboto text-Dark-Slate-Grey font-bold">Thanks for subscribing!</h1>
          <p className="text-balance">a confirmation email has been send to <span className="font-bold">emailexample@gmail.com</span>. Please open it and click the button inside to confirm you subscription.</p>
          <button className="text-White bg-Dark-Slate-Grey my-4 rounded-[16px] h-12 font-roboto font-normal hover:bg-tomate transition duration-300" onClick={dismissHandle}>Dismiss message</button>
        </div>
      )}
      </body>
    </>
  );

}

export default App;
