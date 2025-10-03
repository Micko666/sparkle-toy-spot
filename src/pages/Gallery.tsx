import { useEffect, useState } from "react";

type Drawing = {
  id: string;
  createdAt: string;
  dataUrl: string;
  title?: string;
};

const STORAGE_KEY = "toyjoy_drawings_v1";

function loadDrawings(): Drawing[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Drawing[]) : [];
  } catch {
    return [];
  }
}

const Gallery = () => {
  const [items, setItems] = useState<Drawing[]>([]);

  useEffect(() => {
    setItems(loadDrawings());
  }, []);

  const remove = (id: string) => {
    const next = items.filter((x) => x.id !== id);
    setItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">My Gallery</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">No drawings yet. Create one to get started!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d) => (
            <div key={d.id} className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
              <img src={d.dataUrl} alt={d.title || "Drawing"} className="w-full aspect-video object-cover" />
              <div className="p-4 space-y-1">
                <div className="font-semibold truncate">{d.title || "Untitled"}</div>
                <div className="text-xs text-muted-foreground">{new Date(d.createdAt).toLocaleString()}</div>
                <div className="pt-2 flex gap-3">
                  <a className="text-primary underline" href={d.dataUrl} download={(d.title || "drawing") + ".png"}>Download</a>
                  <button className="text-destructive underline" onClick={() => remove(d.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;


