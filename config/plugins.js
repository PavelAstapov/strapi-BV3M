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
    seo: {
      enabled: true,
    },
    ezforms:{
      config:{
        captchaProvider: {
          name: 'none',
        },
        notificationProviders: []
      }
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
    ezforms:{
        config:{
          captchaProvider: {
            name: 'none',
          },
          notificationProviders: [
            {
              name: 'email',
              enabled: true,
              config: {
                subject: "Mail from Next.js & Strapi", // Optional
                from: 'test@ecto-front.vercel.app'
              }
            },
          ]
        }
    },
    search: {
      enabled: true,
      config: {
        provider: 'algolia',
        excludedFields: ['createdAt', 'createdBy', 'updatedBy'],
        providerOptions: {
          apiKey: env('ALGOLIA_PROVIDER_ADMIN_API_KEY'),
          applicationId: env('ALGOLIA_PROVIDER_APPLICATION_ID'),
        },
        contentTypes: [
          {
            name: 'api::article.article',
            index: 'Itransition test',
            fields: ['id', 'tag', 'url', 'content'],
          }
        ],
      },
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
