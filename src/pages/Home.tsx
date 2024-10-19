const Home = () => {
    return (
      <section className="py-52">
        <div className="container">
          <div className='flex items-center justify-center rounded-2xl bg-[url("https://www.shadcnblocks.com/images/block/circles.svg")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
            <div className="mx-auto max-w-screen-md">
              <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
                Start building your websites faster
              </h1>
              <p className="text-muted-foreground md:text-lg mt-14">
                Try our tools and services to build your website faster. Start
                with a 14-day free trial. No credit card required. No setup fees.
                Cancel anytime.
              </p>
              <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
                <button className="text-white bg-black border px-8 py-3 rounded-xl hover:bg-gray-700">Get Started</button>
                <button className="text-black bg-white border px-8 py-3 rounded-xl hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;
  
  