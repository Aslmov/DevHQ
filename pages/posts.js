import {auth, db} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export  default  function Posts(){
    return(
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form>
                <h1 className="text-2xl font-bold">Créer un post</h1>
                <div>
                    <h3>Description</h3>
                    <textarea className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm"></textarea>
                    <p>0/300</p>
                    <button>Poster</button>
                </div>
            </form>
        </div>
    )
}