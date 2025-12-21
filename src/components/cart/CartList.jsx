import CartItem from "./CartItem";

const CartList = ({ cartItems = [] }) => {
  if (cartItems.length === 0) {
    return (
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "60px 20px",
          textAlign: "center",
          boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
          width: "100%",
          maxWidth: "640px",
        }}
      >
        <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
          Your cart is empty
        </h3>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Add products to continue
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
