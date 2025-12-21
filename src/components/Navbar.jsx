import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // ✅ outline cart icon
import { IoClose } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const NAVBAR_HEIGHT = 64;
const THEME_COLOR = "#b1120b"; // 🔴 brand red

const AppNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  // ✅ cart items from context
  const { cartItems = [] } = useCart();

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);

  /* ===== SCROLL LOGIC ===== */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        setShowNavbar(false);
        setShowSearch(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar
        bg="white"
        fixed="top"
        className={showSearch ? "" : "shadow-sm"}
        style={{
          height: NAVBAR_HEIGHT,
          zIndex: 1000,
          transform: showNavbar
            ? "translateY(0)"
            : `translateY(-${NAVBAR_HEIGHT}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        <Container className="d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fw-bold fs-4 mb-0 me-auto me-lg-0"
            style={{ color: THEME_COLOR, textDecoration: "none" }}
          >
            Kongdoon
          </Navbar.Brand>

          {/* DESKTOP MENU */}
          <Nav className="d-none d-lg-flex gap-4 text-uppercase fw-semibold">
            {[
              { path: "/", label: "Home" },
              { path: "/collection", label: "Collection" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Nav.Link
                key={item.path}
                as={NavLink}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? THEME_COLOR : "#000",
                })}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* RIGHT ICONS */}
          <div className="d-flex align-items-center" style={{ gap: "24px" }}>
            {/* SEARCH */}
            <FiSearch
              size={26}
              color={THEME_COLOR}
              style={{ cursor: "pointer" }}
              onClick={openSearch}
            />

            {/* CART (outline icon + red badge) */}
            <Link
  to="/cart"
  style={{ position: "relative", color: "#b1120b" }}
>
  <FiShoppingCart size={26} />

  {cartItems.length > 0 && (
    <span
      style={{
        position: "absolute",
        top: "-8px",
        right: "-10px",
        backgroundColor: "#b1120b",
        color: "#fff",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: "700",
        padding: "2px 6px",
      }}
    >
      {cartItems.length}
    </span>
  )}
</Link>

          </div>
        </Container>
      </Navbar>

      {/* ================= SEARCH BAR ================= */}
      <div
        style={{
          position: "fixed",
          top: NAVBAR_HEIGHT,
          left: 0,
          width: "100%",
          background: "white",
          zIndex: 999,
          transform: showSearch ? "translateY(0)" : "translateY(-100%)",
          visibility: showSearch ? "visible" : "hidden",
          pointerEvents: showSearch ? "auto" : "none",
          transition: "transform 0.35s ease, visibility 0.35s ease",
          padding: "18px 0",
          boxShadow: showSearch
            ? "0 14px 24px -12px rgba(0,0,0,0.15)"
            : "none",
        }}
      >
        <Container className="d-flex align-items-center justify-content-center gap-3">
          <input
            type="text"
            placeholder="Search for items..."
            autoFocus={showSearch}
            className="form-control rounded-pill"
            style={{
              maxWidth: "720px",
              height: "46px",
              paddingLeft: "20px",
              fontSize: "15px",
              border: `1px solid ${THEME_COLOR}`,
              boxShadow: "none",
            }}
          />

          <IoClose
            size={26}
            style={{ cursor: "pointer", color: THEME_COLOR }}
            onClick={closeSearch}
          />
        </Container>
      </div>
    </>
  );
};

export default AppNavbar;
