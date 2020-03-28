import { environment } from '../environments/environment';

export const API_RESOURCE = {
    SIGNUP_ENDPOINT: environment.url + 'auth/signup',
    ACTIVATE_ENDPOINT: environment.url + 'auth/activate',
    RESEND_ENDPOINT: environment.url + 'auth/resend_code',
    CHANGE_PASSWORD_ENDPOINT: environment.url + 'auth/change_password',
    LOGIN_ENDPOINT: environment.url + 'auth/login'
}
