// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,

// })

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging"
      ? "/mng/"
      : "/",
  devServer: {
    port: 8000,
    proxy: {
      "/storage": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        logLevel: "debug"
      },
      "/manager-api": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        logLevel: "debug"
      },
      "/report": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',

        changeOrigin: true,
        pathRewrite: {
          "^/report": "/report/"
        }
      },
      "/manager": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        pathRewrite: {
          "^/manager": "/manager/"
        }
      },
      "/campaigns": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        pathRewrite: {
          "^/campaigns": "/campaigns/"
        }
      },
      "/loyalty-segment": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        pathRewrite: {
          "^/loyalty-segment": "/loyalty-segment/"
        }
      },
      "/profile-segment": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        pathRewrite: {
          "^/profile-segment": "/profile-segment/"
        }
      },
      "/magnum-client": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        pathRewrite: {
          "^/magnum-client": "/magnum-client/"
        }
      },
      "/frauds": {
        target: "http://172.16.10.215",
        // target: 'http://172.16.11.197',
        // target: 'http://10.70.6.9',
        changeOrigin: true,
        pathRewrite: {
          "^/frauds": "/frauds/"
        }
      }
    }
  }
};
