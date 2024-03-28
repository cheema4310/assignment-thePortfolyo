import ReviewCard from './ReviewCard';

export default function Testimonials({ testimonials }) {
  console.log(testimonials);
  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <ReviewCard key={index} testi={testi} index={index} />
        ))}
      </div>
    </div>
  );
}
