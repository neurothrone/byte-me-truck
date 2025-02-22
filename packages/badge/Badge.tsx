interface BadgeProps {
  count: number;
}

const Badge = ({count}: BadgeProps) => {
  return count > 0 ? (
    <span className="absolute -top-2 -right-2 bg-spicy-red text-white text-xs px-2 py-1 rounded-full">
      {count}
    </span>
  ) : null;
}

export default Badge;
