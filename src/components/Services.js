export default function Services({ services }) {
  console.log(services);
  const Service = ({ service, index }) => {
    const addClass = index === 4 ? 'order-last' : '';
    return (
      <div
        className={`${addClass} col-span-2 even:row-span-3 odd:row-span-2 bg-darker rounded-lg`}
      >
        <div className="h-full flex flex-col">
          {/* display image only for Even Index Service */}

          {index % 2 !== 0 && (
            <div className="h-44">
              <img
                src={service.image.url}
                className="w-full h-full object-cover rounded-t-lg"
                alt="this is service"
              />
            </div>
          )}
          <div className="flex flex-col h-full justify-between">
            <h2 className="py-4 text-2xl text-center font-modern font-bold text-lighter">
              {service.name}
            </h2>
            <p className="px-4 flex-1 my-flex text-lg text-center text-lighter font-btn border-b-8 border-darkest">
              {service.desc}
            </p>
            <div className="py-4 px-4 my-flex justify-between font-modern text-lg">
              <p className="text-lighter">Starts from</p>
              <p className="font-bold">{service.charge}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="my-heading text-center py-20">Services</h2>
      <div className="grid grid-cols-6 grid-rows-5 gap-6 lg:h-[150vh] w-full">
        {services.map((service, index) => (
          <Service key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
