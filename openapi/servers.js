import constant from "../src/config/constant";

const { PORT, APP_NAME } = constant;

const servers = [
  {
    url: `http://localhost:${PORT}/api`,
    description: "Local server"
  },
  {
    url: `https://${APP_NAME}.herokuapp.com/api`,
    description: "Production server"
  },
];

export default servers;
