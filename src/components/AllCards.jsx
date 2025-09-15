import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Cards() {
  const [allCards, setAllCards] = useState([]);
  const [searchCard, setSearchCard] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = (card) => {
    // use name_short as the unique id + encode for safety
    navigate(`/cards/${encodeURIComponent(card.name_short)}`, { state: { card } });
  };

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://tarotapi.dev/api/v1/cards", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setAllCards(Array.isArray(data.cards) ? data.cards : []);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Failed to load cards.");
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  const filteredCards = allCards.filter((card) =>
    (card?.name || "").toLowerCase().includes(searchCard.toLowerCase())
  );

  if (loading) return <p>Loading cards…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  return (
    <>
      <p><Link to="/">← Back</Link></p>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search cards..."
          value={searchCard}
          onChange={(e) => setSearchCard(e.target.value)}
          className="cardSearch"
        />
      </div>

      <div className="title">
        <h1>All Cards</h1>
      </div>

      <div className="cardsGrid">
        {filteredCards.length === 0 ? (
          <p>No matches.</p>
        ) : (
          filteredCards.map((card) => (
            <div key={card.name_short} className="cardContainer">
              <div className="cardAbout">
                <h2>{card.name}</h2>
                <button onClick={() => handleClick(card)} className="cardDetailButton">
                  Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cards;
