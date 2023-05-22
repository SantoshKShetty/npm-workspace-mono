export default async function loadPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw Error("Failed to load from json placeholder posts!!");
    const data = await response.json();
    return data;
}