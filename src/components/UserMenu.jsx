import { useGetUser } from "@/hooks/useGetUser";
import { deleteSession, redirectToTMDB } from "@/lib/auth";

export const UserMenu = () => {
  const sessionId = sessionStorage.getItem("session_id");

  if (!sessionId) return <button onClick={redirectToTMDB}>Login</button>;

  const { isLoading, isError, user } = useGetUser({ sessionId });
  console.log(user);

  if (isError) return <button onClick={redirectToTMDB}>Login</button>;

  if (isLoading)
    return (
      <div className="rounded-full w-12 h-12 bg-gray-300 animate-pulse"></div>
    );

  return (
    <div>
      {user && (
        <img
          className="rounded-full w-12 h-12 object-cover"
          src={
            user.avatar.tmdb.avatar_path
              ? `https://image.tmdb.org/t/p/w45${user.avatar.tmdb.avatar_path}`
              : `https://gravatar.com/avatar/${user.avatar.gravatar.hash}?s=48&d=wavatar`
          }
          alt="User image"
          onClick={deleteSession}
        />
      )}
    </div>
  );
};
