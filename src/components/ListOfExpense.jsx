import React from 'react'
import Expense from './Expense'

const ListOfExpense = ({ expenses }) => {
  const heading = 'text-gray-500 text-2xl font-bold text-center'
  return (
    <>
      {expenses.length ? (
        <>
          <h2 className={heading}>Gastos</h2>
          <div className='flex flex-col gap-4 mt-2'>
            {expenses.map((expense) => (
              <Expense expense={expense} key={expense.id} />
            ))}
          </div>
        </>
      ) : (
        <h2 className={heading}>Aun no hay gastos</h2>
      )}
    </>
  )
}

export default ListOfExpense
