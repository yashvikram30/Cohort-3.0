import {useState,useEffect} from 'react';

export function usePostTitle(){
    const [post, setPost] = useState({})

    async function getPosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
        const json = await response.json()
        setPost(json)
    }

    useEffect(() => {
      getPosts();
    }, [])
    
    return post.title;
}



// generalised useFetch function
export function useFetch(url){
  const [finalData, setFinalData] = useState({})
  const [loading, setLoading] = useState(true)

  console.log(url)

  async function getDetails(){
    setLoading(true)
    const response = await fetch(url)
    const json = await response.json()
    setFinalData(json)
    setLoading(false)
  }

  useEffect(() => {
    getDetails()
  }, [url])
  
  return {
    finalData,
    loading
  }
}