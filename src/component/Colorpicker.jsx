import DisplayColor from "./DisplayColor";

export default function ColorPicker({ onSelectColor }) {
  const colors = ["Red", "Pink", "Blue", "Yellow", "Purple", "Orange"];

  return (
    <div className="container">
      <label className="label">Pick a color:</label>
      <select
        className="dropdown"
        onChange={(e) => onSelectColor(e.target.value)}
      >
        <option value="">Select a color</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}
