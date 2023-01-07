import { useNavigate } from "react-router-dom";


export default function PostCard({ post }) {
    const navigate = useNavigate();

     //* HandleClick is called when user /clicks on the PostCard on homepage - from here it can be deleted or updated//or when creating a new PostCard
    function handleClick() {
        navigate(`posts/${post.id}`);
    }

    return (
        <article onClick={handleClick}>
            <img src={post.image} alt={post.title} /> 
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    );
}
