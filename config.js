// ===== API CONFIGURATION =====
// Set IS_LOCAL to true for local development, false for production.
const IS_LOCAL = false;

// Local
// const ENV = {
//   LEADS_API:    'http://localhost:5000/api/v1/leads/submit',
//   PRODUCTS_API: 'http://localhost:5000/api/v1',
//   ORDERS_API:   'http://localhost:5000/api/v1',
// };

// Production
const ENV = {
  LEADS_API:    'https://medical-backend-sand.vercel.app/api/v1/leads/submit',
  PRODUCTS_API: 'https://medical-backend-sand.vercel.app/api/v1',
  ORDERS_API:   'https://medical-backend-sand.vercel.app/api/v1',
};
