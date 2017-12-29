interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'ENkK7Tp0XSr8PD40YDAQ6UcKGRpAXgRr',
    domain: 'zion.auth0.com',
    callbackURL: 'http://localhost:3000/login'
  };
  