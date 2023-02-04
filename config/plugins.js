module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // comments: {
    //   enabled: true,
    //   config: {
    //     badWords: false,
    //     moderatorRoles: ["Authenticated"],
    //     approvalFlow: ["api::page.page"],
    //     entryLabel: {
    //       "*": ["Title", "title", "Name", "name", "Subject", "subject"],
    //       "api::page.page": ["MyField"],
    //     },
    //     reportReasons: {
    //       MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
    //     },
    //     gql: {
    //       // ...
    //     },
    //   },
    // },
    seo: {
      enabled: true,
    },
    publisher: {
      enabled: true,
    },
    'navigation': { enabled: true },
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 5,
      }
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 20,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  });
