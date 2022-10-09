import faker from "faker";
import { Session } from "inspector";
import { useEffect } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
    const [Suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const Suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,

        }));
        setSuggestions(Suggestions);
    }, []);

    return ( <
        div className = "flex space-x-2 p-6 bg-whight mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black " > {
            Session && ( <
                Story img = { session.user.image }
                username = { session.user.username }
                />
            )
        }

        {
            Suggestions.map(profile => { <
                Story
                key = { profile.id }
                img = { profile.avatar }
                username = { profile.username }
                />
            })
        } <
        /div>
    );
}
export default Stories