export default async function getImages(request, page, api_key) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${api_key}&q=${request}&image_type=photo&orientation=horizontal&per_page=20&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { error: error.message };
  }
}
