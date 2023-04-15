import up_arrow from "../assets/up_arrow.png"
import down_arrow from "../assets/down_arrow.png"
import green_up_arrow from "../assets/green_up_arrow.png"
import green_down_arrow from "../assets/green_down_arrow.png"



export default function Posts() {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // const array: number[] = [
  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  // 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  // 23, 24, 25, 26, 27, 28, 29, 30
  // ];

  type returnObject = {
    postId: number;
    title: string;
    upvoteCount: number;
  };

  const returnArr: returnObject[] = [
    {
      postId: 0,
      title: "Alert system for AWS charges.",
      upvoteCount: 132,
    },
    {
      postId: 1,
      title: "Alert system for AWS charges.",
      upvoteCount: 120,
    },
    {
      postId: 2,
      title: "Alert system for AWS charges.",
      upvoteCount: 100,
    },
    {
      postId: 3,
      title: "Alert system for AWS charges.",
      upvoteCount: 84,
    },
    {
      postId: 4,
      title: "Alert system for AWS charges.",
      upvoteCount: 32,
    },
    {
      postId: 5,
      title: "Alert system for AWS charges.",
      upvoteCount: 3,
    },
    // {
    //   postId: 2,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 100,
    // },
    // {
    //   postId: 3,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 84,
    // },
    // {
    //   postId: 4,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 32,
    // },
    // {
    //   postId: 5,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 3,
    // },
    // {
    //   postId: 2,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 100,
    // },
    // {
    //   postId: 3,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 84,
    // },
    // {
    //   postId: 4,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 32,
    // },
    // {
    //   postId: 5,
    //   title: "Alert system for AWS charges.",
    //   upvoteCount: 3,
    // },
  ];

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
          <div className="
                          mx-1 
                          bg-[#3A3A3A] 
                            
                          min-w-[1rem] 
                          w-[1.5rem]
                          max-w-[5rem]
                          
                          "
          >
            <img src={up_arrow} className="bg-[#3A3A3A] ]"/>
            <img src={down_arrow} className="bg-[#3A3A3A] "/>
          </div>
          <div className='bg-[#3A3A3A] '>
            <div className=" 
                          mx-1 
                          bg-[#3A3A3A] 
                            
                          min-w-[2rem]
                          "
            >
              {returnArr[index].title}
            </div>
            <div className="
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
