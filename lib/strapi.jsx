export async function getSlides() {
    const res = await fetch(
        "http://localhost:1337/api/slides?populate=*",
        { cache: "no-store" }
    );

    const { data } = await res.json();
    return data;
}