function refresh() {
  window.location.reload();
}

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button onClick={refresh}>{text}</button>
    </div>
  );
};

export default SubmitButton;
