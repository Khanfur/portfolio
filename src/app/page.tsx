import Introduction from "./components/introduction";

export default function Home() {
  return (
    <div className="content-container rounded-2xl">
      <Introduction
        title="lorem ipsum"
        description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur
        "
        imageUrl="/placeholder.jpg"
        imageAlt="alt"
      />
    </div>
  );
}
