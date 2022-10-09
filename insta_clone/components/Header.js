import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirolaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { images } from "../next.config";
import { useRouter } from "next/router";
import { modalState, nodalState } from "../atoms/modalAtom";

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilStsteI(modalState);
    const router = useRouter();
    return ( <
        div className = "shadow-sm border-b bg-white sticky top-0" >
        <
        div className = "flex justify-center max-w-6xl mx-5 lg:mx-auto" > { /* Left */ } <
        div onClick = {
            () => router.push('/')
        }
        className = "relative hidden lg:inline-grid h-24 w-24 cursor-pointer" >
        <
        Image scr = 'https"//links.papareact.com/ocw'
        layout = "fill"
        objectFit = "contain" / >
        <
        /div> <
        div onClick = {
            () => router.push('/')
        }
        className = "relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer" >
        <
        Image scr = 'https"//links.papareact.com/jjm'
        layout = "fill"
        objectFit = "contain" / >

        <
        /div>

        { /* Middle - Search input field */ } <
        div className = "max-w-xs" >
        <
        div className = "relative mt-1 p-3 rounded-md " >
        <
        div className = "flex absolute inset-y-0 pl=3 items-center pointer-event-none " >
        <
        SearchIcon className = 'h-5 w-5 text-gray-500' / >
        <
        /div>  <
        input className = "bg-gray-50 block w-full pl-10 sm:text-sm bourder-gray-300 focus:ring-black focus:bourder-black rounded-md"
        type = "text"
        placeholder = "Search" / >
        <
        /div> </div >

        { /* Right  */ } <
        div className = "flex items-center justify-end spaxe-x-4 " >
        <
        HomeIcon onClick = {
            () => router.push('/')
        }
        className = "navBtn" / >
        <
        MenuIcon className = "h-6 md:hidden cursor-pointer" / >

        {
            session ? ( <
                >
                <
                div className = "relative navBtn" >
                <
                PaperAirolaneIcon className = "navBtn rotate-45" / >
                <
                div className = "absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white" > 7 < /div>  <
                /div> <
                PlusCircleIcon onClick = {
                    () => setOpen(true)
                }
                className = "navBtn" / >
                <
                UserGroupIcon className = "navBtn" / >
                <
                HeartIcon className = "navBtn" / >

                <
                img onClick = { signOut }
                src = { session.user.images }
                alt = "profile pic"
                className = "h-10 w-10 rounded-full cursor-pointer" / >
                <
                />
            ) : ( <
                button onClick = { signIn } > Sign In < /button>
            )
        }

        <
        /div>  <
        /div>  <
        /div>
    );
}

export default Header;