import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Info } from 'lucide-react';
import Button from './Button';
import RatingStars from './RatingStars';

const VpnCard = ({ 
  brand, 
  logo, 
  rating, 
  features, 
  description,
  price,
  isPopular,
  index,
  onReadReview,
  officialUrl
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border transition-all duration-300 flex flex-col md:flex-row items-center gap-6 ${isPopular ? 'border-primary ring-1 ring-primary/20' : 'border-gray-100'}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide z-10">
          Editor's Choice
        </div>
      )}

      {/* Brand & Logo */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
        <img src={logo} alt={`${brand} logo`} className="h-16 object-contain mb-4" />
        <RatingStars rating={rating} />
        <button 
          onClick={() => onReadReview(brand)}
          className="text-sm text-text-light mt-3 underline hover:text-primary transition-colors font-medium border-none bg-none p-0 cursor-pointer"
        >
          Read Detail
        </button>
      </div>

      {/* Information */}
      <div className="w-full md:w-2/4 flex flex-col pt-4 md:pt-0">
        <h3 className="text-xl font-bold text-text mb-2">{brand}</h3>
        <p className="text-text-light mb-4 text-sm leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center text-xs text-text">
              <CheckCircle size={14} className="text-accent-green mr-2 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Price */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 mt-4 md:mt-0">
        <div className="text-center mb-4">
          <p className="text-text-light text-[10px] uppercase font-bold tracking-wider">Starting at</p>
          <div className="flex items-end justify-center text-primary">
            <span className="text-sm font-semibold mb-1">$</span>
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-sm text-text-light mb-1 ml-1">/mo</span>
          </div>
        </div>
        
        <a 
          href={officialUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button className="w-full mb-2 shadow-lg shadow-primary/20">Visit Site</Button>
        </a>
      </div>
    </motion.div>
  );
};

export default VpnCard;
