import { useState, useEffect } from 'react'
import { moneyFormat } from '../utils'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetDescription = ({ budget, expenses }) => {
  const [spent, setSpent] = useState(0)
  const [available, setAvailable] = useState(budget)
  const [percentage, setPercentage] = useState(0)
  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    )
    const allAvailable = budget - totalSpent
    const newPercentage = (((budget - spent) / budget) * 100).toFixed(2)
    setSpent(totalSpent)
    setAvailable(allAvailable)
    setTimeout(() => {
      setPercentage(newPercentage)
    }, 500)
  }, [expenses, spent])

  return (
    <div className='container mx-auto rounded-sm shadow-lg bg-gray-50 grid grid-flow-col items-center p-4 -mb-12 mt-4'>
      <div className='w-[200px] h-[200px] mx-auto'>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#4338ca',
            textColor: '#6b7280',
            trailColor: '#a5b4fc'
          })}
          backgroundPadding={5}
          text={`${percentage}%`}
          value={percentage}
        />
      </div>

      <div>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <p className='text-gray-700 font-semibold'>Presupuesto:</p>
          <span className='text-lg text-indigo-500 font-bold'>
            {moneyFormat(budget)}
          </span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <p className='text-gray-700 font-semibold'>Disponible:</p>
          <span className='text-lg text-indigo-500 font-bold'>
            {moneyFormat(available)}
          </span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
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
