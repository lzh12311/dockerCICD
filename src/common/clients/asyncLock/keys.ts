/**
 * The keys of all global registered async locks.
 * 
 * The locks will be created/fetch based on this key.
 * A lock corresponding to a specific key can only be obtained by one object at the same time.
 */
const AsyncLockKeys = {
    checkBusy: "checkBusy",
    userWebSocket: "userWebSocket",
    authentication: {
      init: "authentication/init",
      login: "authentication/login"
    },
    global: {
      handler: "global/handaler"
    },
    style: {
      init: "style/init"
    },
    model: {
      create: "model/create"
    }
  }
  
  export default AsyncLockKeys;