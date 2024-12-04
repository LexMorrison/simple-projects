export default async function getFriendList() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
