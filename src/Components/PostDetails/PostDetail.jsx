import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title}= post;
    const {postId} = useParams();
    const navigate = useNavigate();

    console.log(postId)

    const handleGoBack = () =>{
        navigate(-1)
    }

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>{title}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;