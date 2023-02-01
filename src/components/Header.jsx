import React from 'react'
import NewBudget from './NewBudget'
import BudgetDescription from './BudgetDescription'
const Header = ({
  budget,
  newBudget,
  isValidBudget,
  setIsValidBudget,
  expenses
}) => {
  return (
    <header className='w-100 bg-indigo-800 p-4'>
      <h1 className='text-center text-white text-3xl font-bold uppercase mt-4 mb-2'>
        Planificador de gastos
      </h1>
      {isValidBudget ? (
        <BudgetDescription budget={budget} expenses={expenses} />
      ) : (
        <NewBudget
          budget={budget}
          newBudget={newBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  )
}

export default Header
