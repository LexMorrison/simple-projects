import { useState, useEffect } from "react";
import Button from "../helpers/Button";
import getFriendList from "../api/friendListApi";

import FriendList from "../components/friendList/FriendList";
import SuccessMessage from "../components/friendList/SuccessMessage";

function FriendListPage() {
  const [users, setUsers] = useState([]);
  const [invited, setInvited] = useState([]);
  const [filteredList, setFilteredList] = useState("");
  const [isInviteSent, setIsInviteSent] = useState(false);

  useEffect(() => {
    const fetchFriends = async () => {
      const data = await getFriendList();
      setUsers(data.data);
    };
    fetchFriends();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(filteredList.toLowerCase()) ||
      user.last_name.toLowerCase().includes(filteredList.toLowerCase()) ||
      user.email.toLowerCase().includes(filteredList.toLowerCase())
  );

  const handleAddToFavorite = (id) => {
    setInvited((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSendInv = () => {
    setIsInviteSent(true);
  };

  const handleGoBack = () => {
    setIsInviteSent(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setFilteredList("");
    }
  };

  const clearInput = () => {
    setFilteredList("");
  };

  return (
    <section className="friendListPage">
      {!isInviteSent ? (
        <>
          <div className="inputWrapper">
            <input
              type="text"
              className="searchInput"
              placeholder="Search by name or email..."
              value={filteredList}
              onChange={(e) => setFilteredList(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {filteredList && (
              <Button className="clearButton" PressMe={clearInput} text={"✖"} />
            )}
          </div>
          <FriendList
            data={filteredUsers}
            handleAddToFavorite={handleAddToFavorite}
            invited={invited}
          />
          <Button
            className="inviteButton"
            PressMe={handleSendInv}
            text={"Send invite"}
          />
        </>
      ) : (
        <SuccessMessage
          invitedCount={invited.length}
          handleGoBack={handleGoBack}
        />
      )}
    </section>
  );
}

export default FriendListPage;
