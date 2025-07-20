import * as Analytics from "firebase/analytics";


import firebase from "../external/firebase";

/**
 * The analytics instance of Firbase, or undefined if the analytics is not enabled.
 */
const analytics = Analytics.getAnalytics(firebase);

/**
 * The function to set the user ID.
 * @param userId The ID of the logged-in user.
 */
const setUserId = (userId: string | undefined): void => {
    if (analytics) {
        Analytics.setUserProperties(analytics, { user_id: userId });
        Analytics.setUserId(analytics, userId ?? null);
    }
};

/**
 * The function to log the event if the Firebase analytics client is ready.
 * @param apobUserId The APOB ID of the user.
 * @param type The type of the event.
 * @param event The parameters of the event.
 */
const logEvent = (apobUserId: string, type: string, event?: any): void => {
    if (analytics) {

        Analytics.logEvent(analytics, type, {
            ...event,
            apob_user_id: apobUserId
        });
    }
};

export { setUserId, logEvent };
