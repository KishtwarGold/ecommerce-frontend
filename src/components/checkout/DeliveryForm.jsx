import { useState } from "react";
import { Country, State, City } from "country-state-city";

const DeliveryForm = () => {
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");

  const countries = Country.getAllCountries();
  const states = countryCode ? State.getStatesOfCountry(countryCode) : [];
  const cities = stateCode ? City.getCitiesOfState(countryCode, stateCode) : [];

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
        <div className="checkout-grid-form">
          <input placeholder="First name" required />
          <input placeholder="Last name" />

          <input
            className="full"
            type="email"
            placeholder="Email address"
            required
          />

          <input
            className="full"
            placeholder="Street address"
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

          <input placeholder="Zipcode" required />

          <input
            className="full"
            placeholder="Phone number"
            required
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryForm;
