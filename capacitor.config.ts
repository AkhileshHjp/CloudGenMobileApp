import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'CloudGen',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 3000, 
      "launchAutoHide": false     
    }
  },

  
};

export default config;



