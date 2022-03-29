import axios from 'axios'

export async function getCV() {
  const res = await axios.get(`https://frejandreassen.github.io/cv/Frej_Andreassen_CV_MAC.json`)
  return res.data
}

export async function getProjects(search) {
  return {"projects":[
    {
      "author": "Frej",
      "created": "2022-03-12",
      "title": "This is the title",
      "slug": "this-is-the-title",
      "categories": ["Technology", "Startup"],
      "coverImageUrl": "https://images.unsplash.com/photo-1643644264891-c04194e937a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "coverImageAltText": "Picture of dog",
      "description": "This is the summary of the article",
      "content": "# This is markdown text"
    },
    {
      "author": "Frej",
      "created": "2022-03-12",
      "title": "This is the title",
      "slug": "this-is-the-title",
      "categories": ["Technology", "Web3"],
      "coverImageUrl": "https://images.unsplash.com/photo-1643644264891-c04194e937a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "coverImageAltText": "Picture of dog",
      "description": "This is the summary of the article",
      "content": "# This is markdown text"
    },
    {
      "author": "Frej",
      "created": "2022-03-12",
      "title": "This is the title",
      "slug": "this-is-the-title",
      "categories": ["Development", "Startup"],
      "coverImageUrl": "https://images.unsplash.com/photo-1643644264891-c04194e937a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "coverImageAltText": "Picture of dog",
      "description": "This is the summary of the article",
      "content": "# This is markdown text"
    },
    {
      "author": "Frej",
      "created": "2022-03-12",
      "title": "This is the title",
      "slug": "this-is-the-title",
      "categories": ["Technology"],
      "coverImageUrl": "https://images.unsplash.com/photo-1643644264891-c04194e937a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "coverImageAltText": "Picture of dog",
      "description": "This is the summary of the article",
      "content": "# This is markdown text"
    },
    {
      "author": "Frej",
      "created": "2022-03-12",
      "title": "This is the title",
      "slug": "this-is-the-title",
      "categories": ["Startup"],
      "coverImageUrl": "https://images.unsplash.com/photo-1643644264891-c04194e937a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "coverImageAltText": "Picture of dog",
      "description": "This is the summary of the article",
      "content": "# This is markdown text"
    }
  ]}
} 