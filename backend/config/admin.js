module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4af5e3fbd8bd76fd6d5ca8e871a5b3eb'),
  },
});
