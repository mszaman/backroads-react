import MenuItem from "../Navbar/NavItems/MenuItem";
import SocialItem from "../Navbar/NavItems/SocialItem";

export default function FooterSection() {
  return (
    <footer className="bg-grey-1 px-8 py-20 text-center capitalize text-white">
      {/* Nav Items */}
      <MenuItem
        className={`mb-6 flex flex-wrap justify-center gap-10 tracking-[0.25rem]`}
      />

      {/* Social Icons */}
      <SocialItem
        className={`text mb-6 flex flex-wrap justify-center gap-x-5 text-[2rem]`}
      />

      <p className="tracking-[0.25rem]">
        copyright &copy; Backroads-TWCSS travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
