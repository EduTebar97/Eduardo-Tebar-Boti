
import { describe, it } from 'vitest';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

describe('Check Firestore Posts', () => {
  it('should list all posts (draft and published)', async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log(`FOUND ${posts.length} POSTS IN DATABASE:`);
    console.log(JSON.stringify(posts, null, 2));

    if (posts.length === 0) {
        console.log("⚠️ Database is empty. This explains why the public blog is empty.");
    }
  });
});
