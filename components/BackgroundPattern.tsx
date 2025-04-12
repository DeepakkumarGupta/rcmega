const PatternBackground = () => {
    return (
      <div className="fixed inset-0 -z-10 bg-sky-400">
        {/* Mountains */}
        <div className="absolute inset-x-0 bottom-1/3 h-1/3">
          <div 
            className="absolute bottom-0 w-full h-full bg-gray-300 clip-path-mountain"
            style={{
              clipPath: 'polygon(0% 100%, 5% 70%, 10% 80%, 15% 60%, 20% 90%, 25% 70%, 30% 100%, 35% 80%, 40% 90%, 45% 65%, 50% 75%, 55% 85%, 60% 60%, 65% 95%, 70% 70%, 75% 80%, 80% 65%, 85% 90%, 90% 75%, 95% 85%, 100% 100%)'
            }}
          />
          <div 
            className="absolute bottom-0 w-full h-3/4 bg-gray-400/80 clip-path-mountain-rear"
            style={{
              clipPath: 'polygon(0% 100%, 10% 60%, 20% 80%, 30% 50%, 40% 70%, 50% 40%, 60% 65%, 70% 45%, 80% 75%, 90% 55%, 100% 100%)'
            }}
          />
        </div>
  
        {/* Racing Track */}
        <div className="absolute inset-x-0 bottom-0 h-1/3">
          {/* Track Base */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gray-700 rounded-t-xl shadow-lg">
            {/* Road Lines */}
            <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-yellow-400" />
            
            {/* Checkered Flag Pattern */}
            <div 
              className="absolute right-0 top-0 h-16 w-16 bg-repeat"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #000 25%, transparent 25%),
                  linear-gradient(-45deg, #000 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #000 75%),
                  linear-gradient(-45deg, transparent 75%, #000 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}
            />
          </div>
  
          {/* Track Border */}
          <div className="absolute inset-x-0 bottom-0 h-full border-8 border-red-600 rounded-t-xl" />
          
          {/* Grass Area */}
          <div className="absolute inset-x-0 -bottom-2 h-12 bg-green-600 rounded-t-lg shadow-lg" />
          
          {/* Barriers */}
          <div className="absolute inset-x-0 bottom-1/3 h-4 bg-red-500 flex justify-between px-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 h-full bg-white" />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PatternBackground;