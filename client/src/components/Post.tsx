function PostContent() {
  return (
    <>
      <div
        className="
                  my-2
                  h-auto
                  w-[48rem] 
                  overflow-auto 
                  rounded-md 
                  bg-[#3A3A3A] 
                  xs:min-h-[75vh]
                  xs:p-1
                  sm:min-h-[80vh]
                  sm:pl-3
                  sm:pt-3
                  
                  "
      >
        <div className="bg-[#3A3A3A] p-5 text-white">
          <div className="mb-1 bg-[#3A3A3A] ms:text-xl sm:text-3xl">
            Post Title
          </div>
          <div className="bg-[#3A3A3A] ms:text-base">Username - Date</div>
          <div className="bg-[#3A3A3A] ms:text-base">Upvote count</div>
          <div className="my-5 bg-[#3A3A3A] ms:text-xl">Main Content Here</div>
        </div>
      </div>
    </>
  );
}

const array = []


function BuildComments() {

// ! Stopped at trying to 




  return (
    <>

    </>
  );
}




function PostComments() {
  return (
    <>
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
        <div className="bg-[#3A3A3A] p-5 text-white">
          
          Discussion
          
          
        </div>
      </div>
    </>
  );
}

export default function Post(): JSX.Element {
  return (
    <>
      <div className="flex justify-center">{PostContent()}</div>
      <div className="flex justify-center">{PostComments()}</div>
    </>
  );
}
