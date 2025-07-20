import React from 'react'

const CardBox = ({ rule, heading, description }) => {
  return (
    <div className="bg-primary w-[500px] border border-gray-light/20 rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:border-primary-red/30 transition-all duration-300">
      

      {/* Content */}
      <div className="relative z-10">
        {/* Rule indicator */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-2 bg-primary-red rounded-full"></div>
          <span className="text-primary-red text-sm font-medium tracking-wider uppercase">
            {rule}
          </span>
        </div>

        {/* Heading */}
        <h3 className="text-primary-white text-3xl lg:text-4xl xl:text-5xl font-black leading-tight mb-16 group-hover:text-primary-red/90 transition-colors duration-300">
          {heading}
        </h3>

        {/* Description */}
        <p className="text-gray-light text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  )
}

export default CardBox