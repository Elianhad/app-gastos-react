import React from 'react'
import NewBudget from './NewBudget'
import BudgetDescription from './BudgetDescription'
const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
  setExpenses
}) => {
  return (
    <header className='w-100 bg-indigo-800 p-4'>
      <h1 className='text-center text-white text-3xl font-bold uppercase mt-4 mb-2'>
        Planificador de gastos
      </h1>
      {isValidBudget ? (
        <BudgetDescription
          budget={budget}
          expenses={expenses}
          setExpenses={setExpenses}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          newBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  )
}

export default Header
