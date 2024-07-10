import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_API_URL);
const createAttendee = async (data) => {
  try {
    const record = await pb.collection('attendees').create(data);
    return record;
  } catch (error) {
    console.error("Error creating attendee:", error);
    throw error;
  }
};


export default createAttendee;
