import ReviewCard from './ReviewCard';

export default function Testimonials({ testimonials }) {
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="pt-32 pb-20 my-heading-5xl text-center">Testimonials</h2>
      <div className="grid grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <ReviewCard key={index} testi={testi} index={index} />
        ))}
      </div>
    </div>
  );
}
