function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
