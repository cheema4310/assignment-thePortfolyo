import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div className="my-flex justify-between w-4/5 h-24 mx-auto z-50">
        <div className="group cursor-pointer">
          <h2 className="my-heading text-lighter hover:text-lightest">
            John Doe
          </h2>
          <p className="my-para text-dark group-hover:text-light">
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
