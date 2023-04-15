import up_arrow from "../assets/up_arrow.png";
import down_arrow from "../assets/down_arrow.png";
import green_up_arrow from "../assets/green_up_arrow.png";
import green_down_arrow from "../assets/green_down_arrow.png";
import { returnArr, array } from "../types/types";
import { useState } from "react";

export default function Posts() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const posts = returnArr.map((object, index) => {
    return (
      <a key={returnArr[index].postId} href="/" className="">
        <div
          className="
                    justify-left
                    mx-1
                    my-2 
                    flex
                    w-auto
                    bg-[#3A3A3A]
                    pl-2
                    text-white
                    xs:h-auto
                    xs:text-sm
                    sm:h-[4rem]
                    sm:p-1
                    sm:text-xl
                    
                    "
        >
          {loggedIn ? (
            <div
              className="
                          mx-1 
                          w-[1.5rem] 
                          min-w-[1rem] 
                          max-w-[5rem]
                          bg-[#3A3A3A]
                          
                          "
            >
              <button>
                <img src={green_up_arrow} className=" bg-[#3A3A3A]" />
              </button>
              <button>
                <img src={green_down_arrow} className=" bg-[#3A3A3A] " />
              </button>
            </div>
          ) : (
            <></>
          )}
          <div className="bg-[#3A3A3A] ">
            <div
              className=" 
                          mx-1 
                          min-w-[2rem] 
                            
                          bg-[#3A3A3A]
                          "
            >
              {returnArr[index].title}
            </div>
            <div
              className="
                            mx-1 
                            bg-[#3A3A3A] 
                            xs:text-[9px]
                            sm:text-sm
                            "
            >
              {returnArr[index].upvoteCount} upvotes
            </div>
          </div>
        </div>
      </a>
    );
  });

  return (
    <div
      className="
                flex 
                justify-center 
                "
    >
      <div
        className="
                  my-2
                  h-auto
                  w-[48rem] 
                  overflow-auto 
                  rounded-md 
                  bg-[#3A3A3A] 
                  xs:min-h-[75vh]
                  xs:p-2
                  sm:min-h-[80vh]
                  sm:pl-3
                  sm:pt-3
                  
                  "
      >
        <div className="bg-[#3A3A3A]">{posts}</div>
      </div>
    </div>
  );
}
