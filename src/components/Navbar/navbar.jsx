import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="sticky items-center justify-between text-white bg-black w-full h-14 flex top-0">
      <img
        className="max-w-14 ml-5"
        src="https://i.ibb.co/pQmYsn0/logo.png"
        alt=""
      />
      <div className="text-center items-center">
        <a href="#">About</a>
        <a href="#">Profile</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
