import axios from "axios";

interface Params {
    blogid: string;  // Changed from blogId to blogid
}

export default async function BlogPage({params}: { params: Params }){
    
    const postid = await params.blogid;
    const backend = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    
    return(
        <div>
            title: {backend.data.title} <br/>
            body: {backend.data.body}
        </div>
    )
}