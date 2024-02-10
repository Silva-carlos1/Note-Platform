import logo from './assets/logo.svg'

export function App() {
  return (
  <div className="mx-auto max-w-6xl my-12 space-y-6" >
    <img src={logo} alt="NLW Export" />

    <form className='w-full'>
      <input 
        type="text" 
        placeholder='Busque em suas notas...' 
        className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500'
      />
    </form>

    <div className='h-px bg-slate-700' />

    <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
      <div className="rounded-md bg-slate-700 p-5 space-y-3">
        <span className='text-sm font-medium text-slate-200'>
          Adicionar nota
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota em audio que será convertida em texto automaticamente
        </p>
      </div>

      <div className="rounded-md bg-slate-800 p-5 space-y-3">
        <span className='text-sm font-medium text-slate-300'>
          há 2 dias
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint aut sequi esse ipsam. Illum totam rem, ex, ipsum maxime sit quaerat quas sunt architecto minima voluptas, nostrum quasi. Quibusdam.
        </p>
      </div>

      <div className="rounded-md bg-slate-800 p-5 space-y-3">
        <span className='text-sm font-medium text-slate-300'>
          há 4 dias
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse eveniet optio adipisci ex iure at vitae reprehenderit suscipit consectetur perspiciatis eos fugiat quis eius, minima ullam id, ipsum quae.
        </p>
      </div>

    </div>
  </div>
)
}


