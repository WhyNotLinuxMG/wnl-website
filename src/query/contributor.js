import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_API_URL);
const getContributors = async () => {
  try {
    const record = await pb.collection("contributors").getList(1, 50);
    return record;
  } catch (error) {
    console.error("Error getting contributors:", error);
    throw error;
  }
};

export default getContributors;
