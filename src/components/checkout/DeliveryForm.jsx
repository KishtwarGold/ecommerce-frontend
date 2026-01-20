import { useState } from "react";
import { Country, State, City } from "country-state-city";

const DeliveryForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    phone: "",
    zipcode: ""
  });
  
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");

  const countries = Country.getAllCountries();
  const states = countryCode ? State.getStatesOfCountry(countryCode) : [];
  const cities = stateCode ? City.getCitiesOfState(countryCode, stateCode) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Please fill all required fields!");
      return;
    }

    if (!countryCode || !stateCode || !city) {
      alert("Please select Country, State, and City!");
      return;
    }

    // Prepare data for parent
    const customerData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      address: {
        street: formData.street,
        city: city,
        state: states.find(s => s.isoCode === stateCode)?.name || stateCode,
        country: countries.find(c => c.isoCode === countryCode)?.name || countryCode,
        zipcode: formData.zipcode
      }
    };

    console.log("📦 Submitting order with data:", customerData);
    onSubmit(customerData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{`
        .checkout-card {
          background: #ffffff;
          border-radius: 28px;
          padding: 48px 46px;
          box-shadow: 0 40px 80px rgba(185, 28, 28, 0.12);
        }

        .checkout-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .checkout-title {
          font-size: 23px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 6px;
          color: #7f1d1d;
        }

        .checkout-title span {
          color: #dc2626;
        }

        .checkout-sub {
          font-size: 14px;
          color: #6b7280;
        }

        .checkout-grid-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .checkout-grid-form .full {
          grid-column: 1 / -1;
        }

        .checkout-card input,
        .checkout-card select {
          height: 56px;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          padding: 0 20px;
          font-size: 14px;
          background: #ffffff;
        }

        .checkout-card input:focus,
        .checkout-card select:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        .checkout-card select:disabled {
          background: #f9fafb;
          color: #9ca3af;
        }

        .place-order-btn {
          width: 100%;
          height: 60px;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          margin-top: 24px;
          transition: all 0.3s ease;
        }

        .place-order-btn:hover:not(:disabled) {
          background: #b91c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 38, 38, 0.3);
        }

        .place-order-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 640px) {
          .checkout-card {
            padding: 30px 24px;
          }
          .checkout-grid-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="checkout-card">
        {/* HEADER */}
        <div className="checkout-header">
          <div className="checkout-title">
            DELIVERY <span>INFORMATION</span>
          </div>
          <div className="checkout-sub">
            Complete your order by providing your details.
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div className="checkout-grid-form">
            <input 
              name="firstName"
              placeholder="First name" 
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
            <input 
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />

            <input
              className="full"
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className="full"
              name="street"
              placeholder="Street address"
              value={formData.street}
              onChange={handleChange}
              required
            />

            <select
              value={countryCode}
              onChange={(e) => {
                setCountryCode(e.target.value);
                setStateCode("");
                setCity("");
              }}
              required
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              value={stateCode}
              onChange={(e) => {
                setStateCode(e.target.value);
                setCity("");
              }}
              disabled={!countryCode}
              required
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              ))}
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled={!stateCode}
              required
            >
              <option value="">Select City</option>
              {cities.map((ct) => (
                <option key={ct.name} value={ct.name}>
                  {ct.name}
                </option>
              ))}
            </select>

            <input 
              name="zipcode"
              placeholder="Zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              required 
            />

            <input
              className="full"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* 🔥 YE HAI TERA BUTTON BHAI! 🔥 */}
          <button 
            type="submit" 
            className="place-order-btn"
            disabled={loading}
          >
            {loading ? "PROCESSING..." : "PLACE ORDER"}
          </button>
        </form>
      </div>
    </>
  );
};

export default DeliveryForm;