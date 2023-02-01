import { useState } from 'react'

const NewBudget = ({ budget, newBudget, setIsValidBudget }) => {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (budget <= 0) {
      setMsg('El monto debe ser mayor a 0')
      return
    }
    setMsg('')
    setIsValidBudget(true)
  }

  return (
    <div className='container bg-gray-50 shadow-lg p-2 w-3/4 mx-auto mt-5 -mb-12 rounded-sm flex flex-col gap-3'>
      <h2 className='text-center text-lg font-semibold text-gray-600 mt-2'>
        Ingresa tu presupuesto
      </h2>
      <form
        className='flex flex-col items-center gap-3 p-4'
        onSubmit={handleSubmit}
      >
        <label className=' text-gray-600 font-semibold mt-4 '>Monto</label>
        <input
          name='budget'
          type='number'
          value={budget}
          onChange={(e) => newBudget(Number(e.target.value))}
          className='p-2 bg-indigo-50 focus:ring-inset focus:ring-indigo-300'
        />
        {msg && <span className='text-xs text-indigo-700'>{msg}</span>}
        <button
          type='submit'
          className=' bg-indigo-600 p-2 rounded-lg text-gray-200 font-bold uppercase hover:bg-indigo-900'
        >
          Aceptar
        </button>
      </form>
    </div>
  )
}

export default NewBudget
