import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

//We use prams to fetch the exact PostCard from the json.file;  we want to delete or update
    export default function UpdatePage() {
    const [post, setPost] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const url = `https://webexam-16711-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`;
   
    useEffect(() => {
        async function getPost() {
            const response = await fetch(url);
            const data = await response.json();
            setPost(data);
        }
        getPost();
    }, [url]);

    //Udating a post using REST PUT method
    async function updatePost(postToUpdate) {
        postToUpdate.uid = post.uid;
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(postToUpdate)
        });
//when condition to create a object/PostCard is true the object/data will be passed to the json.file and user is navigated back to homepage otherwise we get a error message    
        if (response.ok) {
            const data = await response.json();
            console.log("Post updated: ", data);
            navigate("/");
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    //Deleting a post using REST Delete method
    async function deletePost() {
        const confirmDelete = window.confirm(`Do you want to delete post, ${post.title}?`);
        if (confirmDelete) {
            const response = await fetch(url, {
                method: "DELETE"
            });
            
//when condition to delete a object/Postcard is true the object/data will be passed to the json.file and user is navigated back to homepage otherwise we get a error message    
            if (response.ok) {
                console.log("Post deleted");
                navigate("/");
            } else {
                console.log("Sorry, something went wrong");
            }
        }
    }

    return (
        <section className="page" id="UpDate"> 
            <PostForm post={post} savePost={updatePost} />
            <button className="btn-delete" onClick={deletePost}>
                Delete Post
            </button>
        </section>
    );
}
