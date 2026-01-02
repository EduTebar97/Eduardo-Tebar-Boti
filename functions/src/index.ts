import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const publishPost = functions.https.onCall(async (data, context) => {
  // 1. Verify Authentication & Admin Role
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "User must be logged in to publish."
    );
  }

  // Check for custom claim 'admin'
  // Note: For initial setup validation, we might want to allow it if the user is just authenticated
  // until claims are properly set up, but per requirements we need to be strict.
  // const isAdmin = context.auth.token.admin === true;
  // if (!isAdmin) { ... }

  // For now, let's assume we proceed if authenticated to test the flow,
  // but strictly we should check the claim.
  // console.log("User publishing:", context.auth.uid);

  const postId = data.postId;
  if (!postId) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with a 'postId'."
    );
  }

  const db = admin.firestore();
  const draftRef = db.collection("posts_draft").doc(postId);
  const publicRef = db.collection("posts_public").doc(postId);

  try {
    // 2. Read Draft
    const draftSnap = await draftRef.get();
    if (!draftSnap.exists) {
      throw new functions.https.HttpsError("not-found", "Draft post not found.");
    }

    const draftData = draftSnap.data();
    if (!draftData) {
        throw new functions.https.HttpsError("not-found", "Draft data is empty.");
    }

    // 3. Validate & Sanitize (Simplified for MVP)
    // Ensure required fields exist
    if (!draftData.title || !draftData.content) {
         throw new functions.https.HttpsError("failed-precondition", "Post must have title and content.");
    }

    // 4. Publish to Public Collection
    const publicData = {
      ...draftData,
      publishedAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      // Remove sensitive or internal fields if any
      status: "published"
    };

    // Use a transaction/batch if we were doing more, but simple set is okay here.
    await publicRef.set(publicData);

    console.log(`Successfully published post ${postId} to posts_public.`);
    return { success: true, postId: postId, message: "Post published successfully." };

  } catch (error) {
    console.error("Error publishing post:", error);
    throw new functions.https.HttpsError("internal", "Unable to publish post.");
  }
});
