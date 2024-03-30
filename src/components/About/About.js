export default function About({ about }) {
  return (
    <section id="about" className="w-11/12 lg:w-4/5 mx-auto">
      <h2 className="my-heading-5xl text-center py-20">About me</h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-8 lg:grid-rows-5 gap-6 text-light font-btn font-medium">
        {/* description */}
        <div className="col-span-2 lg:col-span-3 row-span-3 my-flex bg-darker rounded-2xl text-justify px-6 lg:p-12 text-xl">
          {about.description}
        </div>
        {/* image */}
        <div className="col-span-2 row-span-2 lg:row-span-3 bg-darker rounded-2xl lg:p-12 my-flex">
          <div className="w-44 h-44">
            <img
              src={about.avatar.url}
              className="w-full h-full rounded-full object-cover"
              alt="avatar"
            />
          </div>
        </div>
        {/* completed projects */}
        <div className="col-span-1 row-span-1 lg:row-span-2 bg-darker rounded-2xl p-8 my-flex flex-col">
          <h2 className="text-5xl text-textColor font-bold">
            {about.some_total}+
          </h2>
          <p className="text-xl">Completed Projects</p>
        </div>
        {/* exp years */}
        <div className="col-span-1 row-span-1 lg:row-span-2 bg-darker rounded-2xl p-8 my-flex flex-col">
          <h2 className="text-5xl text-textColor font-bold">
            {about.exp_year}+
          </h2>
          <p className="text-xl">Experience Years</p>
        </div>
        {/* address */}
        <div className="col-span-2 lg:col-span-3 row-span-2 bg-darker rounded-2xl lg:p-8 flex flex-col justify-center items-center">
          <p className="text-5xl text-textColor font-bold">{about.name}</p>
          <p className="text-sm text-light">{about.address}</p>
          <p className="text-lg font-heading pt-3 pb-1">{about.phoneNumber}</p>
          <p className="text-lg font-heading">{about.contactEmail}</p>
        </div>
      </div>
    </section>
  );
}
