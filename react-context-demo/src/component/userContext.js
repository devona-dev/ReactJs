import React from 'react';

const userContext = React.createContext('foydalanuvchi');
export const UserProvider = userContext.Provider;
export  const UserConsumer = userContext.Consumer;

