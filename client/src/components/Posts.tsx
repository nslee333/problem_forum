export default function Posts() {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const posts = array.map((number) => {
    return (
      <div
        className="mx-1 my-2 flex h-[100%] w-auto justify-center overflow-scroll border text-white"
        key={number}
      >
        Post #{number}
      </div>
    );
  });

  return (
    <div className="my-2 h-auto min-h-[74vh] w-[100%] overflow-scroll border">
      <div>{posts}</div>
    </div>
  );
}
