import "./project.css";
export default function Project() {
  return (
    <div className="bg-[pink] w-full h-full">
      <h1 className=" font-extrabold text-3xl pt-3 text-black text-center mb-10">
        My Project
      </h1>
      <div className="wrapper">
        <div className="slides">
          <span id="slide-1"></span>
          <span id="slide-2"></span>
          <span id="slide-3"></span>
          <span id="slide-4"></span>
          <span id="slide-5"></span>
          <div className="images">
            <img src="images/OLX.png" alt="" />
            <img src="images/The Band 1.png" alt="" />
            <img src="images/The Band 2.png" alt="" />
            <img src="images/todolist.png" alt="" />
            <img src="images/glory.png" alt="" />
          </div>
        </div>
      </div>
      <div className="navigation">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
        <a href="#slide-4"></a>
        <a href="#slide-5"></a>
      </div>
    </div>
  );
}
