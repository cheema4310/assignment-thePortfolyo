import Button from './shared/Button';

export default function Footer({ href }) {
  return (
    <div className="text-lighter">
      <div className="my-flex flex-col lg:flex-row gap-16  py-20">
        <div className="px-10 lg:p-0 text-xl font-btn font-semibold">
          Interested in working with me? Connect with me here
        </div>
        <Button href={href} width={180} height={60} special>
          Say Hello
        </Button>
      </div>
      <div className="text-center py-3 text-sm font-modern font-light">
        Designed & Built by{' '}
        <span className="text-textColor font-semibold">Zubair Cheema</span>
      </div>
    </div>
  );
}
