import axios from 'axios';
import store from 'store';
const { makeAutoObservable, runInAction } = require('mobx');

axios.defaults.baseURL = `https://63b72b2d4d97e82aa3b6324d.mockapi.io/api/v1/users`;

class Store {
   usersDataList = [];
   userData = {};
   isLoading = false;
   error = '';
   userId = '';

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true, deep: true });
   }

   async fetchAllUsers() {
      const usersDataList = store.get('usersDataList');

      if (usersDataList) {
         this.usersDataList = usersDataList;
         return;
      }

      try {
         runInAction(() => {
            this.isLoading = true;
         });
         const { data } = await axios.get();
         runInAction(() => {
            this.usersDataList = data.map((el) => ({ ...el, isFollow: false }));
            store.set('usersDataList', this.usersDataList);
         });
      } catch (e) {
         runInAction(() => {
            this.error = e.message;
         });
      } finally {
         runInAction(() => {
            this.isLoading = false;
         });
      }
   }

   async fetchOneUser(id) {
      try {
         runInAction(() => {
            this.isLoading = true;
         });
         const { data } = await axios.get(id);
         runInAction(() => {
            const { item } = this.findUserById(id);
            this.userData = { ...item, ...data };
         });
      } catch (e) {
         runInAction(() => {
            this.error = e.message;
         });
      } finally {
         runInAction(() => {
            this.isLoading = false;
         });
      }
   }

   setIsFollow(id, isFollow) {
      const { item, idx } = this.findUserById(id);

      if (isFollow) {
         item.isFollow = false;
         item.followers -= 1;
         this.userData = item;
         this.usersDataList.splice(idx, 1, item);
         store.set('usersDataList', this.usersDataList);
      } else {
         item.isFollow = true;
         item.followers += 1;
         this.userData = item;
         this.usersDataList.splice(idx, 1, item);
         store.set('usersDataList', this.usersDataList);
      }
   }

   findUserById(id) {
      const [item] = this.usersDataList.filter((el) => el.id === id);
      const idx = this.usersDataList.findIndex((el) => el.id === id);
      return { item, idx };
   }

   setFilter(value) {
      switch (value) {
         case 'all':
            this.usersDataList.sort((a, b) => +a.id - +b.id);
            break;
         case 'name':
            this.usersDataList.sort((a, b) => a.user.localeCompare(b.user));
            break;
         case 'tweets':
            this.usersDataList.sort((a, b) => a.tweets - b.tweets);
            break;
         case 'followers':
            this.usersDataList.sort((a, b) => a.followers - b.followers);
            break;
         case 'follow':
            this.usersDataList.sort((a, b) => a.isFollow - b.isFollow);
            break;
         case 'followings':
            this.usersDataList.sort((a, b) => b.isFollow - a.isFollow);
            break;
         default:
            throw new Error('Error selector');
      }
   }
}

export const usersStore = new Store();
