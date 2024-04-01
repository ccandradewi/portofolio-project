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
            <img src="https://ibb.co/T17LC1r" alt="" />
            <img src="https://ibb.co/tzMcBMt" alt="" />
            <img src="https://ibb.co/gvr7Yrx" alt="" />
            <img src="https://ibb.co/X7QPZTf" alt="" />
            <img src="https://ibb.co/7YP83X7" alt="" />
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
