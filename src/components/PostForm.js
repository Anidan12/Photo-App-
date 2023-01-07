import { useEffect, useState } from "react";
import imgplaceholder from "../assets/img-placeholder.jpg";


//In the fuction with 2 parameters, UseState has to be used inside the functional component
//We use multiple state Hooks/functions to track individual values, declare 4 values inicial state to an empty string
export default function PostForm({ savePost, post }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");
    

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (post) {
            // if post, set the states with values from the post object
            // The post object is a property, passed from UpdatePage
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);
        }
    }, [post]); // useEffect is called every time post changes


    //handleImageChange is called every time the user chooses an image in the fire system - it is tricket in the input picture in the form
    function handleImageChange(event) {
        const file = event.target.files[0];
     if (file.size < 5000000) {
            // image file size must be below 5MB
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = event => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
            setErrorMessage("");
        } else {
            // if picture >  0.5MB we get an error message 
            setErrorMessage("The image file is too big!");
        }
    }

     async function uploadImage() {
        //url to new image. "race-crud-rest" should be replaced with own firebase project id
        const url = `https://firebasestorage.googleapis.com/v0/b/webexam-16711.appspot.com/o/${imageFile.name}`;
        // POST request to upload image
        const response = await fetch(url, {
            method: "POST",
            body: imageFile,
            headers: { "Content-Type": imageFile.type }
        });
        const data = await response.json();
        console.log(data); // data response from image upload
        const imageUrl = `${url}?alt=media`;
        return imageUrl;
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        const imageUrl = await uploadImage();
        const formData = {
            // create a new object/PostCard to store the value from states
            title: title,
            image: imageUrl,
            body: body
        };

        const validForm = formData.title && formData.body && formData.image; // will return false if one of the properties doesn't have a value
        if (validForm) {
            // if all fields/ properties are filled, then call savePost
            savePost(formData);
        } else {
            // if not, we get an error essage
            setErrorMessage("Please, fill in all fields.");
        }
    }

    return (
        <form onSubmit={handleSubmit} id="PostForm">
            <label>
                <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                <input type="text" value={body} placeholder="Describ your photo" onChange={e => setBody(e.target.value)} />
            </label>
            <label>
                <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
                <img className="image-preview" src={image} alt="Choose" onError={event => (event.target.src = imgplaceholder)} />
            </label>
            <p className="text-error">{errorMessage}</p>
            <button type="submit">Save</button>
        </form>
    );
}
