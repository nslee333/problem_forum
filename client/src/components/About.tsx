export default function About() {
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
          <div className="bg-[#3A3A3A] p-5 text-white">
            <div className="bg-[#3A3A3A] mb-5">
            The purpose of the Problem Forum is to connect problems with problem solvers.
            </div>
            <div className="bg-[#3A3A3A] my-5">This project was born out of frustration honestly. When I was
            working on learning how to program, I wanted to move away from
            cookie-cutter projects to projects that were focused on solving a
            problem.</div>
            <div className="bg-[#3A3A3A] my-5">
              The issue that I ran into was, how the hell do I find a problem to
              solve? Well this website is my experiment for solving that problem.
            </div>
            <div className="bg-[#3A3A3A] my-5">
              This website takes a bit of inspiration from HackerNews.com and
              GitHub’s issue system.
            </div>
            <div className='my-5'>
              <ul className='bg-[#3A3A3A]'>Rules:</ul>
              <li className='bg-[#3A3A3A]'>Be civil.</li>
              <li className='bg-[#3A3A3A]'>Any form of harassment will not be tolerated.</li>
              <li className='bg-[#3A3A3A]'>If a post is a duplicate of another idea, link the original post in the comments.</li>
              <li className='bg-[#3A3A3A]'>
                If the problem has been already solved, 
                comment in the post with the solution for the OP to use
                and as a reference for other searchers in the future.
              </li>
            </div>
            <div className='my-5'>
              <ul className='bg-[#3A3A3A]'>Post formatting guide:</ul>
                <li className='bg-[#3A3A3A]'>Make sure your idea is as clear as possible.</li>
                <li className='bg-[#3A3A3A]'>Keep your writing organized and concise.</li>
                <li className='bg-[#3A3A3A]'>Keep the title short.</li>
                <li className='bg-[#3A3A3A]'>List 1-3 reasons why it needs to be solved.</li>
                <li className='bg-[#3A3A3A]'>List some ideas on how to solve it, if possible.</li>
                <li className='bg-[#3A3A3A]'>Write out any closing thoughts at the bottom of the post.</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
