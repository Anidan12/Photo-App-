import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";


//Creating a new postCard/Object using POST method
export default function CreatePage() {
    const navigate = useNavigate();

//Creating a object/PostCard using REST POST method
    async function createPost(newPost) {
        newPost.uid = ""; // Default user id added
        const url = "https://webexam-16711-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost)
        });

//when condition to create a object/PostCard is true the object/data will be passed to the json.file and user is navigated back to homepage, otherwise we get an error message
        if (response.ok) {
            const data = await response.json();
            console.log("New post created: ", data);
            navigate("/"); 
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    return (
        <section className="page" id="CreatPage">
            <PostForm savePost={createPost} />
        </section>
    );
}
