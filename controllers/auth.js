import admin from "../firebase";
import User from "../models/user";

export const currentUser = async (req, res) => {
    console.log("REQ HEADERS TOKEN", req.headers.token);
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        // console.log("FIREBASE USER IN CURRENT USER MIDDLEWARE", firebaseUser);
        //guarde al usuario en la base de datos o envíe la respuesta del usuario si ya está guardada
        const user = await User.findOne({email: firebaseUser.email});
        if (user){

        }else {

        }
        res.json(firebaseUser);
    } catch (err) {
        console.log(err);
        res.status(401).json({
            err: "Invalid or expired token",
        });
    }
}

export const privateRoute = async (req, res) => {
    console.log("REQ HEADERS TOKEN IN PRIVATE ROUTE",  req.headers.token);
    res.json({
        ok: true
    })
}