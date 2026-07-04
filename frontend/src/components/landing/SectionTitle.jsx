export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
}) {
  return (
    <div className="text-center">

      <span className="rounded-full border bg-white px-5 py-2 text-sm shadow">
        {badge}
      </span>

      <h1 className="mt-8 text-7xl font-black leading-tight">

        {title}

        <br />

        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

          {highlight}

        </span>

      </h1>

      <p className="mt-6 text-xl text-zinc-500">

        {subtitle}

      </p>

    </div>
  );
}