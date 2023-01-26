export default function SubmitButton({ children, isLoading, onClick }) {
  return (
    <button type="submit" onClick={onClick} disabled={isLoading}>
      {children}
    </button>
  );
}