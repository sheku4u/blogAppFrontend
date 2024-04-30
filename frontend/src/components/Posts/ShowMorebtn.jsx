import React, { useState } from 'react';

const ListComponent = ({ stocks }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div>
      {stocks.slice(0, showAll ? stocks.length : 4).map((stock, index) => (
        <div key={index} className="stock-item">
          {/* Render your stock data here */}
          <p>{stock.name} - {stock.value}</p>
        </div>
      ))}
      {!showAll && stocks.length > 4 && (
        <button onClick={handleShowMore} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
};

export default ListComponent;
