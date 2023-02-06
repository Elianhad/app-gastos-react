import { useEffect, useState } from 'react'
import Message from './Message'
import close from '../assets/img/cerrar.svg'

const ModalAddExpense = ({
  setIsModal,
  ismodalanimated,
  setIsModalAnimated,
  saveChanges,
  editExpenses,
  setEditExpenses
}) => {
  // state of form
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  // state of message of advirtisment
  const [msg, setMsg] = useState(false)
  const [id, setId] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (Object.keys(editExpenses).length > 0) {
      setName(editExpenses.name)
      setAmount(editExpenses.amount)
      setCategory(editExpenses.category)
      setId(editExpenses.id)
      setDate(editExpenses.date)
    }
    console.log(editExpenses.id)
  }, [])
  // manage submit form to add expense to saveChanges
  const handleSubmitExpense = (e) => {
    e.preventDefault()
    if ([name, category].includes('') && amount <= 0) {
      setMsg(true)
      return
    }
    setMsg(false)
    saveChanges({ name, amount, category, id, date })
  }
  // close the modal and set change of css to animated it
  const handleCloseModal = () => {
    setIsModalAnimated(false)
    setEditExpenses({})
    setTimeout(() => {
      setIsModal(false)
    }, 500)
  }
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-80'>
      <button type='button' onClick={handleCloseModal}>
        <img
          src={close}
          alt='cerrar'
          className='w-7 absolute top-4 right-4 p-1 cursor-pointer hover:border-2 hover:border-white rounded-full'
        />
      </button>

      <div
        className={`modal flex flex-col items-center text-gray-50 gap-4 mt-10 ${
          ismodalanimated ? 'animar' : 'opacity-0'
        }`}
      >
        <h2 className='text-xl uppercase font-bold'>
          {editExpenses.name ? 'Editar Gasto' : 'Nuevo Gasto'}
        </h2>
        <form className='flex flex-col gap-6' onSubmit={handleSubmitExpense}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Nombre del gasto</label>
            <input
              id='name'
              type='text'
              placeholder='Añade nombre del gasto'
              className='rounded p-2 text-gray-500'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {msg && <Message color='gray-50' msg='El nombre es obligatorio' />}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='amount'>Cantidad</label>
            <input
              type='number'
              className='rounded p-2 text-gray-500'
              id='amount'
              placeholder='Agrega la cantidad del gasto'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            {msg && <Message color='gray-50' msg='El monto es obligatorio' />}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='category'>Categoría de gasto</label>
            <select
              id='category'
              type='select'
              className='rounded p-2 text-gray-500'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            {msg && (
              <Message color='gray-50' msg='La categoría es obligatoria' />
            )}
          </div>
          <button className='border p-2 rounded mt-5 hover:bg-indigo-300 hover:text-gray-700'>
            Aceptar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModalAddExpense
