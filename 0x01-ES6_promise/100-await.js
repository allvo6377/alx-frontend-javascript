import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser(photo, user) {
  try {
    const photoUrl = await uploadPhoto(photo);
    const newUser = await createUser(user, photoUrl);
    return {
      success: true,
      user: newUser,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
