import AuthButton from "./AuthButton";

export default function NavgationBar() {
  return (
    <div className="flex justify-between items-center border-b border-secondary h-20 px-20">
      <h1>SUPANEXT</h1>
      <AuthButton />
    </div>
  );
}
