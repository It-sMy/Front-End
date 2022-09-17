/// <reference types="react-scripts" />

//env 파일 typed를 통한 자동완성 가능화
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development";
    REACT_APP_FIREBASE_KEY: string;
    REACT_APP_FIREBASE_DOMAIN: string;
    REACT_APP_FIREBASE_PROJECT_ID: string;
    REACT_APP_FIREBASE_STORAGE_BUCKET: string;
    REACT_APP_FIREBASE_SENDER_ID: string;
    REACT_APP_FIREBASE_APP_ID: string;
    REACT_APP_FIREBASE_MEASUREMENT_ID: string;
  }
}
