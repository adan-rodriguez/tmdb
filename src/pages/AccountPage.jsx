export function AccountPage() {
  return (
    <div>
      <h1>Account</h1>
      <p>{sessionStorage.getItem("session_id")}</p>
    </div>
  );
}
