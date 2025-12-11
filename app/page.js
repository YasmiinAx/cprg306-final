import Card from "./home-components/card.js";
import cards from "./home-components/cards.json";
import Nav from "./navbar/nav.js";

export default function Page() {
  return (
    <main>
      <Nav />
      <div className="mt-6 text-center">
        <h1 className="text-3xl text-orange-400 mb-3">Welcome to Boo N Goods!</h1>
        <div className="text-gray-400 text-lg">
          <p>
            Your ultimate destination for exploring, browsing, and planning the
            perfect Halloween experience.
          </p>
          <p>
            Discover costumes, candy, and exciting Halloween events all in one
            place!
          </p>
        </div>
      </div>

      <div className="flex gap-7 ml-10 mr-10 mt-6 h-120">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
}
