export default function Login() {
  return (
    <>
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
          <div
            className="   m-5
                          p-5
                          border 
                          bg-[#3A3A3A] 
                          text-white"
          >
            <form className="bg-[#3A3A3A]">
              <label className="bg-[#4A4A4A] mt-1">Email</label>
              <input className="bg-[#4A4A4A] mt-1 " type="email" placeholder="..." />

              <label className="bg-[#4A4A4A] mt-1">Password</label>
              <input
                className="bg-[#4A4A4A] mt-1"
                type="password"
                placeholder="..."
              />

              <button className="bg-[#4A4A4A] p-0.5">Sign In</button>
            </form>
          </div>
          
          <div className="bg-[#3A3A3A] text-white border">
            <label className="bg-[#4A4A4A] mt-1">Username</label>
            <input className="bg-[#4A4A4A] mt-1 " type="text" placeholder="..." />

            <label className="bg-[#4A4A4A] mt-1">Email</label>
            <input
              className="bg-[#4A4A4A] mt-1"
              type="email"
              placeholder="..."
            />

            <label className="bg-[#4A4A4A] mt-1">Password</label>
            <input
              className="bg-[#4A4A4A] mt-1"
              type="email"
              placeholder="..."
            />
            <div className='bg-[#3a3a3a]'>Strength indicator here</div>

            <label className="bg-[#4A4A4A] mt-1"> Confirm Password</label>
            <input
              className="bg-[#4A4A4A] mt-1"
              type="email"
              placeholder="..."
            />

            <button>Sign Up</button>

          </div>
        </div>
      </div>
    </>
  );
}
