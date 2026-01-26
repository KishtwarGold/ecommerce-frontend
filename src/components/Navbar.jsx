import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { products } from "../utils/productsData";
import logo from "../assets/logo.png";

const NAVBAR_HEIGHT = 64;
const THEME_COLOR = "#b1120b";

const AppNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const lastScrollY = useRef(0);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { cartItems = [] } = useCart();

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => {
    setShowSearch(false);
    setSearchQuery("");
    setActiveIndex(-1);
  };

  /* ===== SCROLL LOGIC (UNCHANGED) ===== */
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

  /* ===== SEARCH FILTER (UNCHANGED) ===== */
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return false;

    const nameMatch = product.name
      .toLowerCase()
      .split(" ")
      .some((word) => word.startsWith(query));

    const typeMatch = product.productType
      .toLowerCase()
      .startsWith(query);

    return nameMatch || typeMatch;
  });

  /* ===== KEYBOARD HANDLING (UNCHANGED) ===== */
  const handleKeyDown = (e) => {
    if (!filteredProducts.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      navigate(`/product/${filteredProducts[activeIndex].id}`);
      closeSearch();
    }

    if (e.key === "Escape") closeSearch();
  };

  /* ===== AUTO SCROLL (UNCHANGED) ===== */
  useEffect(() => {
    if (listRef.current && activeIndex >= 0) {
      listRef.current.children[activeIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex]);

  /* ===== HIGHLIGHT MATCH (UNCHANGED) ===== */
  const highlightMatch = (name, query) => {
    const index = name.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return name;

    return (
      <>
        {name.substring(0, index)}
        <span style={{ color: THEME_COLOR, fontWeight: 700 }}>
          {name.substring(index, index + query.length)}
        </span>
        {name.substring(index + query.length)}
      </>
    );
  };

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
          {/* LOGO + BRAND */}
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none"
          >
            <img src={logo} alt="Kongdoon Logo" style={{ width: 36 }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: THEME_COLOR }}>
              Kongdoon
            </span>
          </Navbar.Brand>

          {/* DESKTOP LINKS */}
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

          {/* ICONS */}
          <div className="d-flex align-items-center" style={{ gap: "24px" }}>
            <FiSearch
              size={26}
              color={THEME_COLOR}
              style={{ cursor: "pointer" }}
              onClick={openSearch}
            />

            <Link to="/cart" style={{ color: THEME_COLOR, position: "relative" }}>
              <FiShoppingCart size={26} />
              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    backgroundColor: THEME_COLOR,
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

            {/* HAMBURGER */}
            <FiMenu
              size={26}
              color={THEME_COLOR}
              className="d-lg-none"
              style={{ cursor: "pointer" }}
              onClick={() => setShowMenu(true)}
            />
          </div>
        </Container>
      </Navbar>

      {/* ================= HAMBURGER MENU ================= */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end" style={{ width: "80%" }} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Welcome to <span style={{ color: THEME_COLOR }}><b>Kongdoon</b></span></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column gap-3 fw-semibold">
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
                onClick={() => setShowMenu(false)}
                style={{
                  color: "#000",               // default black
                  fontSize: "18px",
                  transition: "all 0.3s ease", // smooth animation
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = THEME_COLOR;
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* ================= SEARCH BAR (UNCHANGED) ================= */}
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
        <Container className="d-flex flex-column align-items-center gap-3">
          <div className="d-flex align-items-center gap-3 w-100 justify-content-center">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveIndex(-1);
              }}
              onKeyDown={handleKeyDown}
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
          </div>

          {searchQuery.length > 1 && (
            <div
              ref={listRef}
              style={{
                width: "90%",
                maxWidth: "720px",
                maxHeight: "96px",
                overflowY: "auto",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            >
              {filteredProducts.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  onClick={closeSearch}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "#000",
                    background:
                      index === activeIndex ? "#f5f5f5" : "transparent",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>
                    {highlightMatch(item.name, searchQuery)}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default AppNavbar;
