import React from 'react';

function Checkout() {
  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Payment Info (mock)</label>
          <input type="text" className="form-control" placeholder="Card Number" required />
        </div>
        <button type="submit" className="btn btn-success">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;