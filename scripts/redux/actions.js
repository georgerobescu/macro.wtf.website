/* eslint-disable no-unused-vars,no-undef */
const uiActions = {
  toggleDrawer: (value = null) => {
    store.dispatch({
      type: TOGGLE_DRAWER,
      value,
    });
  },
  setViewportSize: (value) => {
    store.dispatch({
      type: SET_VIEWPORT_SIZE,
      value,
    });
  },
  toggleVideoDialog: (value = null) => {
    store.dispatch({
      type: TOGGLE_VIDEO_DIALOG,
      value,
    });
  },
  setHeroSettings: (value) => {
    store.dispatch({
      type: SET_HERO_SETTINGS,
      value,
    });
  },
  setAddToHomeScreen: (value) => {
    store.dispatch({
      type: SET_ADD_TO_HOMESCREEN,
      value,
    });
  },
};

const routingActions = {
  setRoute: (routeFromAction) => {
    const route = routeFromAction || 'home';
    store.dispatch({
      type: SET_ROUTE,
      route,
    });
  },
  setSubRoute: (subRoute) => {
    store.dispatch({
      type: SET_SUB_ROUTE,
      subRoute,
    });
  },
  setLocation: (url) => {
    window.history.pushState({}, '', url);
    Polymer.Base.fire('location-changed', {}, { node: window });
  },
};

const dialogsActions = {
  openDialog: (dialogName, data) => {
    store.dispatch({
      type: OPEN_DIALOG,
      dialog: {
        [dialogName]: {
          isOpened: true,
          data,
        },
      },
    });
  },
  closeDialog: (dialogName) => {
    store.dispatch({
      type: CLOSE_DIALOG,
      dialogName,
    });
  },
  setDialogError: (dialogName) => ({
    type: SET_DIALOG_ERROR,
    payload: { dialogName },
  }),
};

let toastHideTimeOut;
const toastActions = {
  showToast: (toast) => {
    const duration = typeof toast.duration !== 'undefined' ? toast.duration : 5000;
    store.dispatch({
      type: SHOW_TOAST,
      toast: Object.assign({}, toast, {
        duration,
        visible: true,
      }),
    });

    if (duration === 0) return;
    clearTimeout(toastHideTimeOut);
    toastHideTimeOut = setTimeout(() => {
      toastActions.hideToast();
    }, duration);
  },

  hideToast: () => {
    clearTimeout(toastHideTimeOut);
    store.dispatch({
      type: HIDE_TOAST,
    });
  },
};

const ticketsActions = {
  fetchTickets: () => (dispatch) => {
    dispatch({
      type: FETCH_TICKETS,
    });
  },
};

const _getPartnerItems = (groupId) => {};

const partnersActions = {
  addPartner: (data) => (dispatch) => {
    dispatch({
      type: ADD_POTENTIAL_PARTNER,
      payload: data,
    });

    const id = data.email.replace(/[^\w\s]/gi, '');
    const partner = {
      email: data.email,
      fullName: data.firstFieldValue || '',
      companyName: data.secondFieldValue || '',
    };
  },
  fetchPartners: () => (dispatch) => {
    dispatch({
      type: FETCH_PARTNERS,
    });
  },
};

const videosActions = {
  fetchVideos: () => (dispatch) => {
    dispatch({
      type: FETCH_VIDEOS,
    });
  },
};

const blogActions = {
  fetchList: () => (dispatch) => {
    dispatch({
      type: FETCH_BLOG_LIST,
    });
  },
};

const speakersActions = {
  fetchList: () => (dispatch) => {
    dispatch({
      type: FETCH_SPEAKERS_SUCCESS,
      payload: {
        obj: speakersData.sort((x, y) => (x.id > y.id) - (x.id < y.id)).reduce((acc, curr) =>
          Object.assign({}, acc, { [curr.id]: curr }), {}),
        list: speakersData,
      },
    });
  },
};

const previousSpeakersActions = {
  fetchList: () => (dispatch) => {
    dispatch({
      type: FETCH_PREVIOUS_SPEAKERS,
    });
  },
};

const sessionsActions = {
  fetchList: () => (dispatch) => {
    dispatch({
      type: FETCH_SESSIONS,
    });

    return new Promise((resolve, reject) => {

    });
  },

  fetchUserFeaturedSessions: (userId) => (dispatch) => {
    dispatch({
      type: FETCH_USER_FEATURED_SESSIONS,
      payload: { userId },
    });
  },

  setUserFeaturedSessions: (userId, featuredSessions) => (dispatch) => {
    dispatch({
      type: SET_USER_FEATURED_SESSIONS,
      payload: { userId, featuredSessions },
    });
  },
};

const scheduleActions = {
  fetchSchedule: () => (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULE_SUCCESS,
      data: scheduleData.sort((a, b) => a.date.localeCompare(b.date)),
    });
  },
};

const galleryActions = {
  fetchGallery: () => (dispatch) => {
    dispatch({
      type: FETCH_GALLERY,
    });
  },
};

const _getTeamMembers = (teamId) => {};

const teamActions = {
  fetchTeam: () => (dispatch) => {
    dispatch({
      type: FETCH_TEAM,
    });
  },
};

const userActions = {
  signIn: (providerName) => {

  },

  mergeAccounts: (initialProviderId, pendingCredential) => {

  },

  updateUser: () => {

  },

  signOut: () => {

  },
};

const subscribeActions = {
  subscribe: (data) => (dispatch) => {
    const id = data.email.replace(/[^\w\s]/gi, '');
  },
  resetSubscribed: () => {
    store.dispatch({
      type: SUBSCRIBE,
      subscribed: false,
    });
  },
};

let messaging;
const notificationsActions = {
  initializeMessaging: () => {
    return new Promise((resolve) => {

    });
  },
  requestPermission: () => (dispatch) => {

  },

  getToken: (subscribe) => (dispatch, getState) => {

  },

  unsubscribe: (token) => (dispatch) => {

  },
};

const helperActions = {
  storeUser: (user) => {
    let userToStore = { signedIn: false };

    if (user) {
      const {
        uid,
        displayName,
        photoURL,
        refreshToken,
        actualProvider,
        pendingCredential,
      } = user;

      const email = user.email || (user.providerData && user.providerData[0].email);
      const initialProviderId =
        (user.providerData && user.providerData[0].providerId) || user.initialProviderId;
      const signedIn = (user.uid && true) || user.signedIn;

      userToStore = {
        signedIn,
        uid,
        email,
        displayName,
        photoURL,
        refreshToken,
        initialProviderId,
        actualProvider,
        pendingCredential,
      };
    }

    store.dispatch({
      type: SIGN_IN,
      user: userToStore,
    });
  },

  getFederatedProvider: (provider) => {
  },

  getProviderCompanyName: (provider) => {
    switch (provider) {
      case 'https://accounts.google.com':
      case 'google.com': {
        return 'Google';
      }
      case 'https://www.facebook.com':
      case 'facebook.com': {
        return 'Facebook';
      }
      case 'https://twitter.com':
      case 'twitter.com':
        return 'Twitter';
    }
  },

  trackError: (action, method, message) => {
    if (window.ga) {
      ga('send', 'event', 'error', action + ':' + method, message);
    }
  },
};

