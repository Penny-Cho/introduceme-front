import {
  Auth,
  ConfirmationResult,
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { createFirebaseApp } from "./clientApp";

/**
 * recaptchaContainerId를 사용하여 전화번호 인증 코드 전송.
 * @param phoneNumber string
 * @param recaptchaContainerId sting
 * @returns void
 */
export const sendVerificationCode = async (
  phoneNumber: string,
  recaptchaContainerId: string
) => {
  const app = createFirebaseApp();
  const auth = getAuth(app);

  window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainerId, {
    size: "invisible", // 'invisible'로 설정하여 사용자에게 보이지 않게 합니다.
    callback: (response: any) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
      console.log(response);
    },
    "expired-callback": () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ...
    },
  });

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );
    return confirmationResult;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 인증 코드 확인
 * @param confirmationResult Auth
 * @param code string
 * @returns void
 */
export const verifyCode = async (
  confirmationResult: ConfirmationResult,
  code: string
) => {
  try {
    const result = await confirmationResult.confirm(code);
    return result.user;
  } catch (error) {
    throw new Error(`Failed to verify code: ${error}`);
  }
};
