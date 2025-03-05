const UserCard = ({ user }) => {
  if (!user) {
    return <div className="text-center">No user data available.</div>;
  }
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center">
      <img
        src={user.avatar_url}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold mt-4">{user.name || "No Name"}</h2>
      <p className="text-gray-600">@{user.login}</p>
      <p className="text-gray-500 mt-2">{user.bio || "No bio available."}</p>
      <p className="text-gray-500">{user.location ? `📍 ${user.location}` : ""}</p>

      <div className="flex justify-center gap-4 mt-4">
        <div className="bg-gray-100 p-2 rounded">
          <p className="font-bold">{user.followers}</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <p className="font-bold">{user.public_repos}</p>
          <p className="text-sm text-gray-600">Repositories</p>
        </div>
      </div>
      
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-blue-500 text-white mt-4 py-2 px-4 rounded"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
