export const fetchData = async () => {
   try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.toJson();
        return data;
   } catch (error) {
       console.log(error);
   }
}