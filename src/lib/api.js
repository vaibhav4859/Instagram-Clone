import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../Firebase';
// juggad line 48
export async function addUser(userData) {
    const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    console.log(response.user.uid);

    await addDoc(collection(db, 'users'), {
        email: userData.email,
        name: userData.name,
        username: userData.username,
        password: userData.password
    });

    return null;
}

export async function getUser(userData) {
    const q = query(collection(db, 'users'), where('email', '==', userData.email), where('password', '==', userData.password));
    const documents = await getDocs(q);
    let user;
    documents.forEach((doc) => {
        user = doc.data();
    });
    return user;
}

export async function isVaildUser(userData) {
    const q = query(collection(db, 'users'), where('email', '==', userData.email));
    const documents = await getDocs(q);
    let currUser;
    documents.forEach((doc) => {
        currUser = doc.data();
    });
    if (!currUser) return 'email';
    const user = await getUser(userData);
    if (!user) return 'password';
}

export async function isValidUserSignup(userData) {
    let error = {};
    const qEmail = query(collection(db, 'users'), where('email', '==', userData.email));
    const qUsername = query(collection(db, 'users'), where('username', '==', userData.username));

    const documentsEmail = await getDocs(qEmail);
    const documentsUsername = await getDocs(qUsername);

    let userEmail, userUsername;
    documentsEmail.forEach((doc) => userEmail = doc.data());
    documentsUsername.forEach((doc) => userUsername = doc.data());
    
    if (userEmail) error.email = true;
    if (userUsername) error.userUsername = true;
    return error;
}

export async function updatePassword(userData) {
    const documents = await getDocs(query(collection(db, 'users'), where('email', '==', userData.email)));
    let userId, user;
    documents.forEach((doc) => {
        user = doc.data();
        userId = doc._key.path.segments[6]; // jugaad user id kaha se ayegi?
    });
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
        password: userData.password
    });
    console.log(user);
}