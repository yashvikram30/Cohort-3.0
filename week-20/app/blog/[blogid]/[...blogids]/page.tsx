
interface BlogIdsProps {
    params: {
        blogids: string[];
    };
}

export default function BlogIds({params}: BlogIdsProps){
    // here our default function is not async, so we do not need to assign await to the params
    // we can use this to actually perform some operation in nested structure
    // this will not handle the blog/[blogid] route, so we can do [[...blogids]] to do so (not really used)
    return(
        <div>
            {JSON.stringify(params.blogids)};
        </div>
    )
}