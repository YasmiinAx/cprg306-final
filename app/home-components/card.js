import Link from "next/link";

export default function Card( {title, image, alt, description, href} ) {
    return (
    <div className="border-2 border-orange-400 p-4 rounded-2xl bg-gray-900">
        <img src={image} alt={alt} className="p-3 rounded-lg w-200 h-60" />
        <h2 className="pl-3 text-2xl">{title}</h2>
        <p className="pl-3 text-gray-400 mt-2 mb-6 max-w-200">{description}</p>
        <Link 
            href={href}
            className="mr-10 ml-10 flex justify-center border bg-black border-orange-400 text-orange-400 p-2 rounded-lg"
        >
        Browse
        </Link>
    </div>
  );
}
