import QuoteSVG from './QuoteSVG';

export default function Testimonials({ testimonials }) {
  console.log(testimonials);
  return (
    <div>
      <div>
        {testimonials.map((review, index) => (
          <div key={index} className="bg-light">
            <div>
              <QuoteSVG />
            </div>
            <p>desc</p>
            <p>name</p>
            <div>
              <img alt="user" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
