export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1340),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
