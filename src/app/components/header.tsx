import ThemeSwitcher from "./themeSwitcher";

export default function header() {
  return (
    <nav className="flex justify-end items-center bg-transparent p-4">
      <ThemeSwitcher />
    </nav>
  );
}