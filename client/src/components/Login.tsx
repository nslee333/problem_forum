export default function Login() {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="
                    my-2
                    h-auto
                    w-[48rem] 
                    overflow-auto 
                    rounded-md 
                    bg-[#3A3A3A] 
                    xs:min-h-[75vh]
                    xs:p-5
                    sm:min-h-[80vh]
                    sm:pl-3
                    sm:pt-3
                    
                    "
        >
          <div className="flex justify-center bg-[#3A3A3A]">
            <div
              className="   m-5
                            bg-[#3A3A3A]
                            p-5
                            text-white
                            sm:w-7/12
                            "
            >
              <form className="grid bg-[#3A3A3A]">
                <div className="mb-2 bg-[#3A3A3A] ms:text-xl sm:text-2xl">
                  Login
                </div>
                <label className="my-2 bg-[#3a3a3a]">Email</label>
                <input
                  className="mt-2 rounded bg-[#4A4A4A] p-1"
                  type="email"
                  placeholder="..."
                />

                <label className="mt-2 bg-[#3A3A3A]">Password</label>
                <input
                  className="mb-1 mt-2 rounded bg-[#4A4A4A] p-1"
                  type="password"
                  placeholder="..."
                />
                <a href="/" className="bg-[#3A3A3A]">
                  <div className="my-2 bg-[#3A3A3A] italic">
                    Forgot your password?
                  </div>
                </a>

                <button className="mt-5 rounded bg-[#4A4A4A] p-0.5 sm:w-3/12">
                  Login
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 flex justify-center bg-[#3A3A3A]">
            <div
              className="
                            m-5 
                            grid 
                            bg-[#3A3A3A] 
                            p-5
                            text-white
                            sm:w-7/12
                            
                            "
            >
              <div className="mb-2 bg-[#3A3A3A] ms:text-xl sm:text-2xl">
                Sign Up
              </div>
              <label className="my-2 bg-[#3A3A3A]">Username</label>
              <input
                className="my-2 rounded bg-[#4A4A4A] p-1"
                type="text"
                placeholder="..."
              />

              <label className="my-2 bg-[#3A3A3A]">Email</label>
              <input
                className="my-2 rounded bg-[#4A4A4A] p-1"
                type="email"
                placeholder="..."
              />

              <label className="my-2 bg-[#3A3A3A]">Password</label>
              <input
                className="my-2 rounded bg-[#4A4A4A] p-1"
                type="email"
                placeholder="..."
              />
              <div className="bg-[#3a3a3a]">Strength indicator here</div>

              <label className="my-2 bg-[#3A3A3A]"> Confirm Password</label>
              <input
                className="my-2 rounded bg-[#4A4A4A] p-1"
                type="email"
                placeholder="..."
              />

              <button className="my-2 rounded bg-[#4A4A4A] sm:w-3/12">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
