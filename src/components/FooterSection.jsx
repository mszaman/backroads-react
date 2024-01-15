export default function FooterSection() {
  return (
    <footer className="bg-grey-1 px-8 py-20 text-center capitalize text-white">
      <ul className="mb-6 flex flex-wrap justify-center gap-10 tracking-[0.25rem]">
        <li>
          <a className="duration-300 hover:text-primary-4" href="#hero">
            Home
          </a>
        </li>
        <li>
          <a className="duration-300 hover:text-primary-4" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="duration-300 hover:text-primary-4" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="duration-300 hover:text-primary-4" href="#tours">
            Tours
          </a>
        </li>
      </ul>
      <ul className="text mb-6 flex flex-wrap justify-center gap-x-5 text-[2rem]">
        <li>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </li>
      </ul>
      <p className="tracking-[0.25rem]">
        copyright &copy; Backroads-TWCSS travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
