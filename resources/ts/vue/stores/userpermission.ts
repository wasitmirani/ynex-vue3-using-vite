import { defineStore } from 'pinia';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export const useUserRoleStore = defineStore('userRole', {
  state: () => ({
    role: UserRole.USER,
  }),
  getters: {
    isAdmin: (state) => state.role === UserRole.ADMIN,
    isUser: (state) => state.role === UserRole.USER,
  },
  actions: {
    setRole(role: UserRole) {
      this.role = role;
    },
  },
});
