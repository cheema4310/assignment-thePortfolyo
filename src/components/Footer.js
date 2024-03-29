import Button from './shared/Button';

export default function Footer({ href }) {
  return (
    <div className="text-lighter">
      <div className="my-flex gap-16  py-20">
        <div className="text-xl font-btn font-medium">
          Interested in working with me? Connect with me here
        </div>
        <Button href={href} width={180} height={60} special>
          Say Hello
        </Button>
      </div>
      <div className="bg-darker text-center py-3 text-sm font-modern font-light">
        Designed & Built by Zubair Cheema
      </div>
    </div>
  );
}
