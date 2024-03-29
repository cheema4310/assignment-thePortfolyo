export default function About({ about }) {
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="my-heading-5xl text-center py-20">About me</h2>
      <div className="grid grid-cols-5 grid-rows-5 gap-6">
        {/* description */}
        <div className="col-span-3 row-span-3 bg-darker rounded-2xl">
          {about.description}
        </div>
        {/* image */}
        <div className="col-span-2 row-span-3 bg-darker">
          <div className="w-20 h-20">
            <img
              src={about.avatar.url}
              className="w-full h-full rounded-full object-cover"
              alt="avatar"
            />
          </div>
        </div>
        {/* completed projects */}
        <div className="col-span-1 row-span-2 bg-darker">
          <h2>{about.some_total}+</h2>
          <p>Completed Projects</p>
        </div>
        {/* exp years */}
        <div className="col-span-1 row-span-2 bg-darker">
          <h2>{about.exp_year}+</h2>
          <p>Experience</p>
        </div>
        {/* address */}
        <div className="col-span-3 row-span-2 bg-darker">
          <p>{about.name}</p>
          <p>{about.address}</p>
          <p>{about.phoneNumber}</p>
          <p>{about.contactEmail}</p>
        </div>
      </div>
    </div>
  );
}
