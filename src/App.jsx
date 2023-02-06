import { useState, useEffect } from 'react'
import Header from './components/Header'
import addNewExpense from './assets/img/nuevo-gasto.svg'
import ModalAddExpense from './components/ModalAddExpense'

import { idGerator } from './utils'
import ListOfExpense from './components/ListOfExpense'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [ismodal, setIsModal] = useState(false)
  const [ismodalanimated, setIsModalAnimated] = useState(false)
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) ?? [])
  const [editExpenses, setEditExpenses] = useState({})

  useEffect(() => {
    if (Object.keys(editExpenses).length > 0) {
      setIsModal(true)
      setTimeout(() => {
        setIsModalAnimated(true)
      }, 200)
    }
  }, [editExpenses])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])
  useEffect(() => {
    const budgetInLS = Number(localStorage.getItem('budget')) ?? 0
    if (budgetInLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

  const handleClickAddExpense = () => {
    setIsModal(true)
    setEditExpenses({})
    setTimeout(() => {
      setIsModalAnimated(true)
    }, 200)
  }
  const saveChanges = (gasto) => {
    if (gasto.id) {
      const expenseUpdate = expenses.map((expenseState) =>
        expenseState.id === gasto.id ? gasto : expenseState
      )
      setExpenses(expenseUpdate)
      setEditExpenses({})
    } else {
      gasto.id = idGerator()
      gasto.date = Date.now()
      setExpenses([...expenses, gasto])
    }
    setIsModalAnimated(false)
    setTimeout(() => {
      setIsModal(false)
    }, 500)
  }

  const deleteExpense = (id) => {
    const noDeletedExpenses = expenses.filter((exp) => exp.id !== id)
    setExpenses(noDeletedExpenses)
  }
  return (
    <div className='h-100'>
      <Header
        budget={budget}
        newBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
      />
      {isValidBudget && (
        <>
          <main className='container mt-12 mx-auto p-4'>
            <ListOfExpense
              expenses={expenses}
              setEditExpenses={setEditExpenses}
              deleteExpense={deleteExpense}
            />
          </main>
          <div
            className='w-10 absolute bottom-10 right-10'
            onClick={handleClickAddExpense}
          >
            <img src={addNewExpense} alt='nuevo gasto' />
          </div>
        </>
      )}
      {ismodal && (
        <ModalAddExpense
          setIsModal={setIsModal}
          ismodalanimated={ismodalanimated}
          setIsModalAnimated={setIsModalAnimated}
          saveChanges={saveChanges}
          editExpenses={editExpenses}
          setEditExpenses={setEditExpenses}
        />
      )}
    </div>
  )
}

export default App
