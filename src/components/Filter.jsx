import { useEffect, useState } from 'react'

const Filter = ({ setFiltro }) => {
  const [valueFilter, setValueFilter] = useState('')

  useEffect(() => {
    setFiltro(valueFilter)
  }, [valueFilter])

  return (
    <form className='shadow-lg container mx-auto mt-[60px] p-10 '>
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='category'
          className='font-semibold text-xl text-gray-600 text-center'
        >
          Filtrar por categoría
        </label>
        <select
          id='category'
          type='select'
          className='rounded p-2 text-gray-500'
          value={valueFilter}
          onChange={(e) => setValueFilter(e.target.value)}
        >
          <option value=''>--Categoría--</option>
          <option value='comida'>Comida</option>
          <option value='gasto'>Gasto vario</option>
          <option value='ocio'>Ocio</option>
          <option value='salud'>Salud</option>
          <option value='suscripciones'>Suscripciones</option>
          <option value='casa'>Casa</option>
          <option value='ahorro'>Ahorro</option>
        </select>
      </div>
    </form>
  )
}

export default Filter
