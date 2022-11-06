import Link from "next/link";
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {FcGoogle} from "react-icons/fc";

export default function Nav(){
    const [user, loading] = useAuthState(auth)
    return(
      <nav className="flex justify-between items-center py-10">
          <Link href="/">
              <button className="text-lg font-NunitoSans">Dev HeadQuater</button>
          </Link>
          <ul className="flex items-center gap-10">
              {!user && (
                  <Link href={"/auth/login"} className="py-2 px-4 text-sm bg-green-600 text-white rounded-lg font-medium ml-8 ">
                      Nous Rejoindre
                  </Link>
              )}
              {user && (
                  <div className="flex items-center gap-6" >
                      <Link href="/posts">
                          <button className=" font-medium bg-green-400 text-white py-2 px-4 rounded-lg text-sm"> Posts</button>
                      </Link>
                      <Link href="/dashboard">
                          <img className="w-9 rounded-full cursor-pointer" src={user.photoURL}/>
                      </Link>
                  </div>
              )}
          </ul>
      </nav>
    )
}