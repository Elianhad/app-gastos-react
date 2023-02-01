import { useState, useEffect } from 'react'
import { moneyFormat } from '../utils'

const BudgetDescription = ({ budget, expenses }) => {
  const [spent, setSpent] = useState(0)
  const [available, setAvailable] = useState(budget)
  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    )
    const allAvailable = budget - totalSpent
    setSpent(totalSpent)
    setAvailable(allAvailable)
  }, [expenses])

  return (
    <div className='container mx-auto rounded-sm shadow-lg bg-gray-50 grid grid-flow-col items-center p-4 -mb-12 mt-4'>
      <p>grafico</p>
      <div>
        <div className='flex gap-2 items-center'>
          <p className='text-gray-700 font-semibold'>Presupuesto:</p>
          <span className='text-lg text-indigo-500 font-bold'>
            {moneyFormat(budget)}
          </span>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-gray-700 font-semibold'>Disponible:</p>
          <span className='text-lg text-indigo-500 font-bold'>
            {moneyFormat(available)}
          </span>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-gray-700 font-semibold'>Gastado:</p>
          <span className='text-lg text-indigo-500 font-bold'>
            {moneyFormat(spent)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BudgetDescription
