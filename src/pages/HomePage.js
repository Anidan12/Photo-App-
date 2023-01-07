import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import BotCarousel from "../components/BotCarousel";

//the Homepage shows the PostCard this by fetching the objects there is in the json.file on the BaaS 
export default function HomePage() {
const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = "https://webexam-16711-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setPosts(postsArray);
        }
        getPosts();
    }, []);


// Returning to the browser; The element BotCarousel importet from the component and the PostCard displayed in a grid
    return (
    <div>
        <div> <BotCarousel/></div>    
        <section className="page" id="HomePage">
            <section className="grid-container">
                {posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))}
            </section>
        </section>
    </div>
    );
}
