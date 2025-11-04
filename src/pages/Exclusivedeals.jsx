import React from "react";

const ExclusiveDeals = () => {
  const deals = [
    {
      title: "Amazon Bulk Saver",
      description:
        "Get 10% off when you purchase two 5L jars on Amazon this month.",
      linkText: "View Offer",
      color: "border-yellow-500 hover:shadow-yellow-200",
      image: "/assets/amazondeal.jpeg",
    },
    {
      title: "Flipkart Festive Combo",
      description:
        "A free recipe book with every purchase over 2L on Flipkart.",
      linkText: "View Offer",
      color: "border-red-500 hover:shadow-red-200",
      image: "/assets/FlipkartOffer.jpg",
    },
    {
      title: "First Time Buyer Discount",
      description:
        "Special introductory discount for new customers on our partner sites.",
      linkText: "Shop Now",
      color: "border-gray-800 hover:shadow-gray-200",
      image: "/assets/firstorder.png",
    },
  ];

  return (
    <section id="deals" className="bg-[#ffecec] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h4 className="text-red-500 uppercase text-sm font-semibold mb-2">
          Value for Purity
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Exclusive Deals for Darpan Customers
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden border-t-4 ${deal.color} shadow-md hover:shadow-xl transition transform hover:-translate-y-1`}
            >
              {/* Image */}
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {deal.title}
                </h3>
                <p className="text-gray-700 mb-6">{deal.description}</p>
                <button className="mt-auto text-red-600 font-semibold hover:underline">
                  {deal.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-12">
          All offers are managed and fulfilled by Amazon and Flipkart.
        </p>
      </div>
    </section>
  );
};

export default ExclusiveDeals;
