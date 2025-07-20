export function Card({ children, className = '' }) {
  return (
    <div className={g-gray-900 rounded-xl shadow-lg }>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return <div className={p-4 }>{children}</div>;
}
