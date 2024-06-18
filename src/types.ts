// src/types.ts

export interface Address {
    street: string;
    city: string;
    country: string;
  }
  
  export interface Preferences {
    theme: string;
    notification: boolean;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    address: Address[];
    preferences: Preferences;
  }
  