type Props = {
  embeds: string[];
};

export default function VideoGrid({ embeds }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {embeds.map((url) => (
        <div
          key={url}
          className="overflow-hidden rounded-lg border border-mightyYellow/30 bg-black shadow-poster"
        >
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={url}
              title="The Mighty Giants video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
}
