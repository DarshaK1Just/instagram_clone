import { collections, onSnepshot } from "@firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post"



function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() =>
        onSnepshot(
            query(collections(db, 'posts'), orderBy('timestamp', 'desc')),
            snapshot => {
                setPosts(snapshot.docs);
            }
        ), [db]
    );


    return ( <
        div > {
            posts.map((post) => ( <
                Post key = { post.id }
                id = { post.id }
                username = { post.data().username }
                userImg = { post.data().profileImg }
                img = { post.data().image }
                caption = { post.data().caption }
                />
            ))
        } <
        Post / >

        <
        Post / >
        <
        Post / >

        { /* Posts */ } { /* Posts */ } { /* Posts */ } { /* Posts */ } { /* Posts */ } <
        /div>
    )
}
export default Posts