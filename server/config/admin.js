module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cccd32d1f01de93a7338e897d335a3b0'),
  },
});
