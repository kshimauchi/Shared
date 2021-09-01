//Re-export
//(1) execute npm run pub
//(2) verify in auth service the version
//(3) inside ticketing/auth exec: npm update @ticket-share/common
export * from './errors/bad-request-error';
export * from './errors/custom-error';
export * from './errors/database-connection-error';
export * from './errors/not-authorized-error';
export * from './errors/not-found-error';
export * from './errors/request-validation-error';


export * from './middlewares/current-user';
export * from './middlewares/error-handler';
export * from './middlewares/require-auth';
export * from './middlewares/validate-request';

export * from './events/base-listener';
export * from './events/base-publisher';
export * from './events/subjects';
export * from './events/ticket-created-event';
export * from './events/ticket-updated-event';
export * from './events/types/order-status';

export * from './events/order-cancelled-event';
export * from './events/order-created-event';
/*
since we are extracting this from main project, need to
install the dependencies
npm install express express-validator cookie-session jsonwebtoken @types/cookie-session @types/express @types/jsonwebtoken
*/

