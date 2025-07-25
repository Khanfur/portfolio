import Image from "next/image";

export default function Introduction(props: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}) {
  return (
    <>
      <div className="flex justify-center align-center">
        <div className="bg-tertiary p-4 h-max rounded-2xl">
          <h1 className="text-3xl font-bold ">{props.title}</h1>
          <p className="mt-2 mb-2 w-180">{props.description}</p>
        </div>
        <div className="px-6 flex items-center">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full bg-accent blur-lg opacity-50" />
            <Image
              src={props.imageUrl}
              alt={props.imageAlt || "Image"}
              fill
              className="rounded-full object-cover border-4 border-accent shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
