import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      userName: 'Vasili S',
      email: 'vasili@gmail.com',
      password: '12345678',
      memberSince: '8/12/2020',
      pfp: 'https://picsum.photos/id/22/200/300',
      isSidebarMinimized: false,
      is2FAEnabled: false,
    }
  },

  actions: {
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized
    },

    toggle2FA() {
      this.is2FAEnabled = !this.is2FAEnabled
    },

    changeUserName(userName: string) {
      this.userName = userName
    },

    changePassword(password: string) {
      this.password = password
    },
  },
})
