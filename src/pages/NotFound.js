import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full h-screen grid place-content-center gap-6">
      <h2 className="my-heading-6xl">Page Not Found</h2>
      <Link className="my-btn mx-auto" to="/">
        Go Home
      </Link>
    </div>
  );
}
