import React from 'react';

const ShoppingCart = ({ cartItems, onClose, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-end z-50 animate-fade-in-left"
      onClick={onClose} // Close cart when clicking outside
    >
      <div
        className="w-full md:w-1/3 bg-gray-900 border-l border-gray-700 shadow-2xl flex flex-col p-6 relative animate-slide-in-right"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside cart
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          aria-label="Close Shopping Cart"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center mt-8 text-lg">Your cart is empty.</p>
        ) : (
          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-4 shadow-md">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-16 h-16 object-cover rounded-md mr-4 border border-gray-700"
                />
                <div className="flex-grow">
                  <p className="text-white font-semibold text-lg">{item.alt}</p>
                  <p className="text-gray-400 text-sm">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => onUpdateQuantity(item.alt, item.quantity - 1)}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-md transition-colors duration-200"
                    aria-label={`Decrease quantity of ${item.alt}`}
                  >
                    -
                  </button>
                  <span className="text-white text-lg">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.alt, item.quantity + 1)}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-md transition-colors duration-200"
                    aria-label={`Increase quantity of ${item.alt}`}
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.alt)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md ml-2 transition-colors duration-200"
                    aria-label={`Remove ${item.alt} from cart`}
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center text-white text-xl font-bold mb-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={cartItems.length === 0}
            className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300
              ${cartItems.length === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800 text-white shadow-lg hover:shadow-xl'}
            `}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
