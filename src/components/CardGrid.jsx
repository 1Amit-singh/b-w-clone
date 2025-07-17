import React from 'react'
import CardBox from './CardBox'

const CardGrid = () => {

     const cardData = [
    {
      rule: "RULE NO.1",
      heading: "DISCIPLINE",
      description: "At our core, we are a team of disciplined professionals who are passionate about our craft. Our process is thorough, ensuring that we create work that is not only buzzworthy, but also surpasses your expectations."
    },
    {
      rule: "RULE NO.2",
      heading: "INNOVATION",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions. Innovation drives every project we undertake, ensuring your brand stays ahead of the competition."
    },
    {
      rule: "RULE NO.3",
      heading: "COLLABORATION",
      description: "We believe in the power of teamwork and open communication. By working closely with our clients, we create solutions that truly reflect their vision and exceed their business objectives."
    },
    {
      rule: "RULE NO.4",
      heading: "EXCELLENCE",
      description: "Quality is never an accident. It's the result of intelligent effort, sincere intention, and skillful execution. We strive for excellence in every pixel, every line of code, and every strategic decision."
    }
  ];

  return (
      <div className="min-h-screen bg-primary py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-primary-white mb-6">
            OUR <span className="text-primary-red">PRINCIPLES</span>
          </h2>
          <p className="text-gray-light text-lg lg:text-xl max-w-3xl mx-auto">
            These fundamental rules guide everything we do and ensure we deliver exceptional results for every client.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {cardData.map((card, index) => (
            <CardBox
              key={index}
              rule={card.rule}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardGrid