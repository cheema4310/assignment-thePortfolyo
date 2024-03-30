export default function NavLinks({ onClose }) {
  return (
    <div className="my-flex flex-col lg:flex-row lg:justify-around gap-10 lg:gap-6 text-3xl font-semibold lg:text-lg">
      <a href="/#projects" className="my-navlink" onClick={onClose}>
        Projects
      </a>
      <a href="/#services" className="my-navlink" onClick={onClose}>
        Services
      </a>
      <a href="/#testimonials" className="my-navlink" onClick={onClose}>
        Testimonials
      </a>
      <a href="/#about" className="my-navlink" onClick={onClose}>
        About
      </a>
    </div>
  );
}
