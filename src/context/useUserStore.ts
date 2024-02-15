import { create } from "zustand";
import { ConfirmationResult, getAuth, onAuthStateChanged } from "firebase/auth";
import { createFirebaseApp } from "@/firebase/clientApp";
import { IUser } from "@/types/user/user";
import { FirebaseApp } from "firebase/app";
import { sendVerificationCode, verifyCode } from "@/firebase/phoneVerification";

interface UserState {
  user: IUser | null;
  loadingUser: boolean;
  confirmationResult?: ConfirmationResult | null;
  setUser: (user: IUser | null) => void;
  setLoadingUser: (loading: boolean) => void;
  sendCode: (
    phoneNumber: string,
    recaptchaContainerId: string
  ) => Promise<void>;
  verifyCode: (
    confirmationResult: ConfirmationResult,
    code: string
  ) => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  loadingUser: true,
  confirmationResult: null,
  setUser: (user) => set(() => ({ user })),
  setLoadingUser: (loading) => set(() => ({ loadingUser: loading })),
  sendCode: async (phoneNumber: string, recaptchaContainerId: string) => {
    try {
      const confirmationResult = await sendVerificationCode(
        phoneNumber,
        recaptchaContainerId
      );
      set(() => ({ confirmationResult }));
    } catch (error) {
      console.log(error);
    }
  },
  verifyCode: async (confirmationResult: ConfirmationResult, code: string) => {
    try {
      const user = await verifyCode(confirmationResult, code);
      set({ user, loadingUser: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

/**
 * firebase 인증 상태 감시 설정 함수
 * @param app FirebaseApp
 * @returns void
 */
const subscribeToAuthChanges = (app: FirebaseApp) => {
  const auth = getAuth(app);

  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      useUserStore.setState({
        user: { uid, displayName, email, photoURL },
        loadingUser: false,
      });
    } else {
      useUserStore.setState({ user: null, loadingUser: false });
    }
  });
};

export const initUserStoreAndAuth = () => {
  const app = createFirebaseApp();
  subscribeToAuthChanges(app);
};

export default useUserStore;
