import Button from "../../helpers/Button";

function FriendList({ data, handleAddToFavorite, invited }) {
  if (!data) return <p>Loading...</p>;
  return (
    <ul className="friendList">
      {data &&
        data.map((item) => (
          <li key={item.id} className="friendItem">
            <img src={item.avatar} alt="user-photo" className="friendAvatar" />
            <div className="friendInfo">
              <h2 className="friendName">
                {item.first_name} {item.last_name}
              </h2>
              <p className="friendEmail">{item.email}</p>
            </div>
            <Button
              className="addButton"
              PressMe={() => handleAddToFavorite(item.id)}
              text={invited.includes(item.id) ? "-" : "+"}
            />
          </li>
        ))}
    </ul>
  );
}

export default FriendList;
