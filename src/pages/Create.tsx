import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

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

function saveDrawing(entry: Drawing) {
  const all = loadDrawings();
  all.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

const Create = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#22c55e");
  const [size, setSize] = useState(12);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    }
  }, [color, size]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    const me = e as React.MouseEvent;
    return { x: me.clientX - rect.left, y: me.clientY - rect.top };
  };

  const start = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const { x, y } = getPos(e);
    const ctx = ctxRef.current!;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const move = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    const ctx = ctxRef.current!;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const end = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
  };

  const clear = () => {
    const canvas = canvasRef.current!;
    const ctx = ctxRef.current!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    const entry: Drawing = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      dataUrl,
      title: title.trim() || undefined,
    };
    saveDrawing(entry);
    setTitle("");
    alert("Saved! Check the Gallery page.");
  };

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Create a Toy Painting</h1>
      <p className="text-muted-foreground">Draw freely, then save to your gallery.</p>

      <div className="flex flex-wrap items-center gap-4">
        <label className="text-sm">Color
          <input className="ml-2 align-middle h-9 w-9 p-0 border rounded" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label className="text-sm">Brush
          <input className="ml-2 align-middle" type="range" min={2} max={48} value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
          <span className="ml-2 text-sm text-muted-foreground">{size}px</span>
        </label>
        <input
          className="px-3 py-2 rounded-md border bg-background"
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="outline" onClick={clear} className="border-primary/40 hover:bg-primary/10">Clear</Button>
        <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">Save</Button>
      </div>

      <div className="mt-4">
        <div className="relative w-full max-w-4xl aspect-[16/9] rounded-xl bg-muted overflow-hidden ring-1 ring-primary/20">
          <canvas
            ref={canvasRef}
            className="w-full h-full touch-none"
            onMouseDown={start}
            onMouseMove={move}
            onMouseUp={end}
            onMouseLeave={end}
            onTouchStart={start}
            onTouchMove={move}
            onTouchEnd={end}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;


