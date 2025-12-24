export default {
  expo: {
    name: "HumanPing",
    slug: "humanping",
    version: "0.1.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.humanping.app"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.humanping.app"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    scheme: "humanping",
    plugins: [
      "expo-font"
    ],
    extra: {
      eas: {
        projectId: "ef326323-46db-40df-b5b4-cb3fde1dd338"
      }
    }
  }
};

