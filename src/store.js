async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

// get posts from fake api
getPosts().then(
    posts => {
        let mapPost = new Map();
        for (let post of posts.values()) {
            // method set (key , value)
            mapPost.set(post.id, post.title)
            // get post which id accept division on an even number, to reduce result
            if (post.id % 8 == 0) {
                console.log( 'Value:     ' , mapPost.get(post.id))
            }

            // delete post number 5
            if (post.id == 5) {
                mapPost.delete(post.id);
            }
        }

        // Print All Posts
        console.log(mapPost);


        let clearMap = new Map();
        for (let clear of posts){
            // set with other Object format
            clearMap.set({myKey: clear.id} , {myValue: clear.title});
        }
            console.log(clearMap);
            console.log(clearMap.size);
            // clearMap.clear();
            // console.log(clearMap.size);

    }
);

