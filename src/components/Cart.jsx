import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const Cart = ({cart, setCart}) => {
    const totalPrice = cart.reduce((acc, item) => (acc + item.price), 0);
    

    const handleCheckout = () => {
        setCart([]);
        toast('Checkout Successful');
    }

    const handleRemoveCart = (item) => {
        const filteredItem = cart.filter(c => c.id !== item.id);
        setCart(filteredItem);
        toast.error('Product removed from Cart');
    }

    return (
      <div className="max-w-300 mx-auto mb-15">
        {cart.length === 0 ? (
          <div className="bg-white shadow-sm p-5 rounded-lg">
            <h2 className="font-bold text-2xl mb-6">Your Cart</h2>
            <div className="flex flex-col  items-center">
              <ShoppingCart className="w-30 h-30 text-gray-400" />
              <h2 className="font-bold text-2xl mt-5">Cart is Empty!</h2>
            </div>
          </div>
        ) : (
          <>
            <div>
              <h2 className="font-bold text-2xl mb-6">Your Cart</h2>
            </div>
            {cart.map(
              (item) =>
                ((
                  <div key={item.id} className="bg-[#F9FAFC] p-5 flex justify-between items-center mb-3 rounded-2xl">
                    <div className="flex gap-4">
                      <img
                        src={item.icon}
                        alt="icon"
                        className="w-15 h-15 p-2 rounded-full border border-zinc-200 bg-white"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveCart(item)}
                        className="text-red-500 font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
            )}
            <div className="flex justify-between p-3">
              <h3>Total:</h3>
              <h2 className="font-bold text-xl">${totalPrice}</h2>
            </div>
            <div>
              <button
                onClick={() => handleCheckout()}
                className="bg-linear-to-r from-[#622EF7] to-[#9216FA] rounded-full w-full px-4 py-3 text-white font-bold"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    );
};

export default Cart;