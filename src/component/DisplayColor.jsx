export default function DisplayColor({ color }) {
  return (
    <div className="container">
      {color ? (
        <div className="color-box" style={{ backgroundColor: color }}>
          {color}
        </div>
      ) : (
        <p className="text">No color selected</p>
      )}
    </div>
  );
}
