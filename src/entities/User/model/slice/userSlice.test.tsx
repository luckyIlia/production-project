import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { userReducer, userActions } from "./userSlice";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { UserSchema, User } from "../types/user";
import { UserRole } from "../consts/userConsts";

type RootState = {
    user: UserSchema;
};

describe("user slice", () => {
    let store: EnhancedStore<RootState>;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                user: userReducer,
            },
        });
    });

    it("should set authentication data", () => {
        const userData: User = { id: "1", username: "testuser", avatar: "testavatar", roles: [UserRole.ADMIN] };
        store.dispatch(userActions.setAuthData(userData));

        const state = store.getState() as RootState;
        expect(state.user.authData).toEqual(userData);
    });

    it("should initialize authentication data from local storage", () => {
        const userData: User = { id: "1", username: "testuser", avatar: "testavatar", roles: [UserRole.ADMIN] };
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));

        store.dispatch(userActions.initAuthData());

        const state = store.getState() as RootState;
        expect(state.user.authData).toEqual(userData);
        expect(state.user._inited).toEqual(true);
    });

    it("should logout user", () => {
        const userData: User = { id: "1", username: "testuser", avatar: "testavatar", roles: [UserRole.ADMIN] };
        store.dispatch(userActions.setAuthData(userData));
        store.dispatch(userActions.logout());

        const state = store.getState() as RootState;
        expect(state.user.authData).toBeUndefined();
        expect(localStorage.removeItem).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
    });
});
