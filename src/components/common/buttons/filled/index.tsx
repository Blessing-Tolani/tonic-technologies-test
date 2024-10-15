export default function FilledButton({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <button
      className={`bg-primary font-open-sans whitespace-nowrap font-bold  text-white  ${className}`}
    >
      {title}
    </button>
  )
}
