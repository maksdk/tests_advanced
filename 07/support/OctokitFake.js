//@ts-check
export default class OctokitFake {
   constructor(data) {
      this.data = data;
   }

   repos = {
      listForUser: () => {
         return Promise.resolve({
            data: this.data
         });
      }
   }
}