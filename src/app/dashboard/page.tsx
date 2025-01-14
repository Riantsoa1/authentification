'use client'

import { unsubscribe } from "diagnostics_channel";
import { Auth } from "firebase-admin/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard(){
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(!user){
                router.push("./page");
            }
        });
        return  () => unsubscribe();
    }, [auth, router]);
    
    return (
        <div>
            <p>Bienvenue, ceci est une page privée.</p>
        </div>
    )
}