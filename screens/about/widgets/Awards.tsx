const Awards = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Awards
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-2 p-6 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-xl font-semibold">Winner Seo Master MAGT</div>
          <div className="text-gray-600">Smart Start Award 2018</div>
        </div>

        <div className="space-y-2 p-6 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-xl font-semibold">Top Social Media Agencies</div>
          <div className="text-gray-600">Next Partner 2019</div>
        </div>

        <div className="space-y-2 p-6 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-xl font-semibold">
            5 Fastest Growing Abstract
          </div>
          <div className="text-gray-600">Solution Providers 2020</div>
        </div>

        <div className="space-y-2 p-6 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-xl font-semibold">
            National Excellence Agencie
          </div>
          <div className="text-gray-600">Award Winner 2021</div>
        </div>
      </div>
    </section>
  );
};
export default Awards;
