import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

const ADMIN_EMAIL = "benar4700@gmail.com";

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        if (userCredential.user.email !== ADMIN_EMAIL) {

            loginError.textContent =
                "You are not authorized.";

            await auth.signOut();

            return;

        }

        window.location.href = "admin.html";

    } catch (error) {

        loginError.textContent =
            "Invalid email or password.";

    }

});