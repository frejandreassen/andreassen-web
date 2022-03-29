import axios from 'axios'

export async function getCV() {
  const res = await axios.get(`https://frejandreassen.github.io/cv/Frej_Andreassen_CV_MAC.json`)
  return res.data
}

export async function getProjects(search) {
  return [
    {
      "author": "Frej",
      "created": "2022-03-12",
      "title": "This is the title",
      "slug": "sample-project",
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
      "content": "\n# Header 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n> ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo\n> massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.\n\n— John Doe, CEO & Founder\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.\n\n![](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)\n\n*Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.*\n\n# Header 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.\n\nSagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.\n\n1. Lectus id duis vitae porttitor enim gravida morbi.\n2. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.\n3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.\n\nVestibulum placerat magna nulla, sit amet venenatis sapien consequat ut. Cras pulvinar, lorem tristique pharetra finibus, dui erat finibus orci, a vehicula arcu sapien id metus. Quisque quis lorem a sem porttitor feugiat. Etiam quis congue est. Donec fermentum ac libero a pretium. Nulla nisl sem, euismod ut eros vitae, egestas scelerisque enim. Vivamus id pharetra massa. Nulla aliquet erat elit, a gravida dui efficitur vel. Sed pulvinar diam sed neque ullamcorper semper. Nulla elementum arcu lacus, quis porta nisl posuere varius. Quisque tempus libero sed urna posuere hendrerit.\n"
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
  ]
} 