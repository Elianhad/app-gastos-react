import React from 'react'
import Expense from './Expense'

const ListOfExpense = ({
  expenses,
  setEditExpenses,
  deleteExpense,
  filterExpenses,
  filtro,
  resetFiltro
}) => {
  const heading = 'text-gray-500 text-2xl font-bold text-center'

  const ComponentsOfFilter = () => {
    return (
      <>
        {filterExpenses.length ? (
          <>
            <h2 className={heading}>Gastos filtrados</h2>
            <div className='flex flex-col gap-4 mt-2'>
              {filterExpenses.map((filt) => (
                <Expense
                  expense={filt}
                  key={filt?.id}
                  setEditExpenses={setEditExpenses}
                  deleteExpense={deleteExpense}
                />
              ))}
            </div>
          </>
        ) : (
          <div className='flex flex-col gap-4 items-center'>
            <h2 className={heading}>No hay resultados</h2>
            <button
              onClick={() => resetFiltro()}
              className='p-2 text-gray-600 bg-indigo-400 hover:bg-indigo-600 hover:text-gray-100 rounded-md '
            >
              Volver
            </button>
          </div>
        )}
      </>
    )
  }
  const ComponentNoFilter = () => {
    return (
      <>
        {expenses.length ? (
          <>
            <h2 className={heading}>Gastos</h2>
            <div className='flex flex-col gap-4 mt-2'>
              {expenses.map((expense) => (
                <Expense
                  expense={expense}
                  key={expense.id}
                  setEditExpenses={setEditExpenses}
                  deleteExpense={deleteExpense}
                />
              ))}
            </div>
          </>
        ) : (
          <h2 className={heading}>Aun no hay gastos</h2>
        )}
      </>
    )
  }

  return <>{filtro ? <ComponentsOfFilter /> : <ComponentNoFilter />}</>
}

export default ListOfExpense
