export default function Intro() {
  return (
    <div className="bg-[pink] w-full text-white flex content-center h-[550px]">
      <div className="w-1/2 content-center">
        <img
          className="max-w-full pt-9 pl-44 mt-16 items-center content-center"
          src="https://ibb.co/6DntLCZ"
          alt=""
        />
      </div>
      <div className="w-1/2 content-center items-center">
        <h1 className="bg-white h-[60px] w-52 text-black font-extrabold text-5xl pl-3 mt-14">
          Hello!
        </h1>
        <h3 className=" text-5xl font-bold"> I'm Cornelia Mustika</h3>
        <h3 className=" mt-2 text-3xl mb-6"> a Web Developer </h3>
      </div>
    </div>
  );
}
