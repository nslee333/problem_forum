export default function Header(): JSX.Element {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="
                    flex
                    p-5
                    text-white 
                    ms:w-[90%]
                    xs:justify-between
                    sm:h-[6rem] 
                    sm:w-2/3
                    sm:justify-around
                    "
        >
          <a href="/">
            <div
              className="
                        mx-2
                        xs:text-base
                        sm:p-2
                        sm:text-xl
                        md:text-2xl
                        "
            >
              Problem Forum
            </div>
          </a>
          <div
            className="
                      xs:text-xs 
                      flex 
                      justify-between 
                      sm:text-base
                      "
          >
            <a href="/">
              <div
                className="
                          mx-1 
                          ms:p-1 
                          ms:text-[11px] 
                          sm:p-2 
                          sm:pt-2.5 
                          sm:text-base 
                          md:text-xl

                          "
              >
                About
              </div>
            </a>
            <a href="/">
              <div
                className="
                          mx-1 
                          ms:p-1 
                          ms:text-[11px] 
                          sm:p-2 
                          sm:pt-2.5 
                          sm:text-base 
                          md:text-xl
                          "
              >
                Login
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
