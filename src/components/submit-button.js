export default function SubmitButton({ children, isLoading, onClick, disabled }) {
  return (
    <button type="submit" onClick={onClick} disabled={isLoading || disabled}>
      {children}
    </button>
  );
}