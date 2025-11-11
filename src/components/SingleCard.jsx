import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

function SingleCard() {
  const { cardId } = useParams(); // matches /cards/:cardId
  const cardFromState = useLocation().state?.card || null;

  const [card, setCard] = useState(cardFromState);
  const [loading, setLoading] = useState(!cardFromState);
  const [error, setError] = useState("");

  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    if (cardFromState) return; // already have it from the list page

    if (!cardId) {
      setError("No card ID in URL.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError("");
        const url = `https://tarotapi.dev/api/v1/cards/${encodeURIComponent(cardId)}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
        const data = await res.json();
        const first = Array.isArray(data.cards) ? data.cards[0] : null;
        if (!first) throw new Error(`No card found for id "${cardId}".`);
        setCard(first);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Failed to load card.");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [cardId, cardFromState]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!card) return <p>No card data.</p>;

  return (
    <div>
      <p><Link to="/cards">← Back</Link></p> 
      <h1>{card.name}</h1>

      <img className= "image"
        src={`/cards/${card.name_short}.jpeg`}
        alt={`${card.name} tarot card`}
        loading="lazy"
        onClick={() => setIsEnlarged(true)}
      />
      <h2>Card Description:</h2>
        <p className="cardInfo">{card.desc}</p>

      <h2>Interpretations:</h2>
        <p className="cardInfo"><strong>Upright:</strong> {card.meaning_up}</p>
        <p className="cardInfo"><strong>Reversed:</strong> {card.meaning_rev}</p>
      {/* <p>
        <strong>Type:</strong> {card.type}
        <strong>ID:</strong> {card.name_short}
      </p> */}

      {isEnlarged && (
        <div className="overlay" onClick={() => setIsEnlarged(false)}>
          <img className="enlargedImg" src={`/cards/${card.name_short}.jpeg`} alt={`${card.name} tarot card enlarged`}
          />
        </div>
      )}
    </div>
  );
}

export default SingleCard;