export default function Costume({ name, category, description, price, img }) {
    return (
        <div className="border-2 border-orange-400 rounded-2xl bg-gray-900 w-118 overflow-hidden">

            <div className="relative w-full h-80">
                <img src={img} alt={name} className="w-full h-full object-cover"/>
                <span className="absolute top-2 right-2 border w-18 bg-black text-center text-red-500 px-2 py-1 text-md rounded-full">
                    {category}
                </span>
            </div>

            <div className="p-5 flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-gray-400 text-sm">{description}</p>
                <p className="text-orange-400 font-bold">${price}</p>
            </div>
        </div>
    );
}
