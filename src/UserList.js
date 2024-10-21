// UserList.js
import React from 'react';
import ProfileCard from './ProfileCard';
import PropTypes from 'prop-types';

function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          age={user.age}
          location={user.location}
          bio={user.bio}
        />
      ))}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
