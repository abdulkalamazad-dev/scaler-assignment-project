import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useGitHubUser from "../hooks/useGitHubUser";

const Home = () => {
  const [username, setUsername] = useState("");
  const { user, loading, error } = useGitHubUser(username);

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">🔍 GitHub User Finder</h1>

      <SearchBar onSearch={setUsername} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default Home;
