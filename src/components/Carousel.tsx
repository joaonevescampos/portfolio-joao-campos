import { useState } from 'react'

type CarouselProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  label: string
}

export function Carousel<T>({ items, renderItem, label }: CarouselProps<T>) {
  const [active, setActive] = useState(0)
  const previous = () => setActive((current) => (current - 1 + items.length) % items.length)
  const next = () => setActive((current) => (current + 1) % items.length)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
          {items.map((item, index) => <div key={index} className="w-full shrink-0 px-1">{renderItem(item, index)}</div>)}
        </div>
      </div>
      <button type="button" onClick={previous} aria-label={`Anterior: ${label}`} className="absolute left-0 top-1/2 grid h-12 w-10 -translate-y-1/2 place-items-center bg-black/70 text-3xl text-white transition-colors hover:bg-cyan-800">‹</button>
      <button type="button" onClick={next} aria-label={`Próximo: ${label}`} className="absolute right-0 top-1/2 grid h-12 w-10 -translate-y-1/2 place-items-center bg-black/70 text-3xl text-white transition-colors hover:bg-cyan-800">›</button>
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, index) => <button key={index} type="button" aria-label={`Ir para ${index + 1} de ${items.length}`} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all ${index === active ? 'w-8 bg-cyan-300' : 'w-2 bg-white/40'}`} />)}
      </div>
    </div>
  )
}