import admin from "../firebase";

export const currentUser = async (req, res) => {
    const idToken = req.headers.token;
    console.log(idToken)
    try {
        const firebaseUser = await admin.auth().verifyIdToken(idToken);
        console.log('FIREBASE USER IN CURRENT USER MIDDLEWARE', firebaseUser);
        res.json(firebaseUser)

    }catch (error){
        console.log(error)
        res.status(401).json({
            error: 'Invalid or expired token'
        })
    }
}