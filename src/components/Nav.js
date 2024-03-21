import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="">
      <div className="my-flex justify-between w-4/5 h-24 mx-auto">
        <div className="group cursor-pointer">
          <h2 className="my-heading text-lighter hover:text-lightest">
            John Doe
          </h2>
          <p className="font-medium font-btn text-base text-lighter group-hover:text-lightest">
            Web Developer + Designer
          </p>
        </div>

        <div className="my-flex justify-around gap-6">
          <NavLink to="#projects" className="my-navlink">
            Projects
          </NavLink>
          <NavLink to="#services" className="my-navlink">
            Services
          </NavLink>
          <NavLink to="#testimonials" className="my-navlink">
            Testimonials
          </NavLink>
          <NavLink to="#about" className="my-navlink">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
