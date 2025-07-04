export default ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "noreply@caesarshop.xyz",
        defaultReplyTo: "support@caesarshop.xyz",
      },
    },
  },
});
