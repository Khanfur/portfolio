import ThemeSwitcher from "./themeSwitcher";

export default function header() {
  return (
    <nav className="flex justify-between items-center bg-transparent p-4">
      <div className="text-lg font-bold">Portfolio</div>
      <ThemeSwitcher />
    </nav>
  );
}