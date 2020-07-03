const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: "home/index",
    pattern: "/",
  },
  {
    page: "sponboard",
    pattern: "/vendor-on-boarding",
  },
];

APP_ROUTES.forEach((route) => routes.add(route));
