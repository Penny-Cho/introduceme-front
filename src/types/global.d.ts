// global.d.ts
export {};

declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier | undefined;
  }
}
