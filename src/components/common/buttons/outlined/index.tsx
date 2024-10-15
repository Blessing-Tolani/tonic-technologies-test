export default function OutlinedButton({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <button
      className={`text-primary font-open-sans whitespace-nowrap  font-bold border-2 bg-transparent border-primary ${className}`}
    >
      {title}
    </button>
  )
}
