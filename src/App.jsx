import { useState, useEffect } from 'react'
import Header from './components/Header'
import addNewExpense from './assets/img/nuevo-gasto.svg'
import ModalAddExpense from './components/ModalAddExpense'

import { idGerator } from './utils'
import ListOfExpense from './components/ListOfExpense'
import Filter from './components/Filter'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [ismodal, setIsModal] = useState(false)
  const [ismodalanimated, setIsModalAnimated] = useState(false)
  const [expenses, setExpenses] = useState( JSON.parse(localStorage.getItem('expenses')) ?? [])
  const [editExpenses, setEditExpenses] = useState({})
  const [filterExpenses, setFilterExpenses] = useState({})
  const [filtro, setFiltro] = useState('')
  // use effect for edit expenses
  useEffect(() => {
    if (Object.keys(editExpenses).length > 0) {
      setIsModal(true)
      setTimeout(() => {
        setIsModalAnimated(true)
      }, 200)
    }
  }, [editExpenses])
  // use Effect for setting localstorage budget
  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])
  // use Effect for setting localstorage expenses
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])
  // useEffect to detecting situation of local storage and condional rendering of de app
  useEffect(() => {
    const budgetInLS = Number(localStorage.getItem('budget')) ?? 0
    if (budgetInLS > 0) {
      setIsValidBudget(true)
    }
  }, [])
  // useEffect  detecting filter and seting the filter
  useEffect(() => {
    const filterBy = expenses.filter((expense) => expense.category === filtro)
    setFilterExpenses(filterBy)
  }, [filtro])

  const handleClickAddExpense = () => {
    setIsModal(true)
    setEditExpenses({})
    setTimeout(() => {
      setIsModalAnimated(true)
    }, 200)
  }
  const saveChanges = (gasto) => {
    if (gasto.id) {
      const expenseUpdate = expenses?.map((expenseState) =>
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
    const noDeletedExpenses = expenses?.filter((exp) => exp.id !== id)
    setExpenses(noDeletedExpenses)
  }
  const resetFiltro = () => {
    setFiltro('')
  }
  return (
    <div className='h-100'>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <Filter setFiltro={setFiltro} />
      {isValidBudget && (
        <>
          <main className='container mt-12 mx-auto p-4'>
            <ListOfExpense
              expenses={expenses}
              setEditExpenses={setEditExpenses}
              deleteExpense={deleteExpense}
              filterExpenses={filterExpenses}
              filtro={filtro}
              resetFiltro={resetFiltro}
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
