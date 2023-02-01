import { useState } from 'react'
import Header from './components/Header'
import addNewExpense from './assets/img/nuevo-gasto.svg'
import ModalAddExpense from './components/ModalAddExpense'

import { idGerator } from './utils'
import ListOfExpense from './components/ListOfExpense'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [ismodal, setIsModal] = useState(false)
  const [ismodalanimated, setIsModalAnimated] = useState(false)
  const [expenses, setExpenses] = useState([])

  const handleClickAddExpense = () => {
    setIsModal(true)
    setTimeout(() => {
      setIsModalAnimated(true)
    }, 200)
  }
  const saveChanges = (gasto) => {
    gasto.id = idGerator()
    gasto.date = Date.now()
    setExpenses([...expenses, gasto])
    setIsModalAnimated(false)
    setTimeout(() => {
      setIsModal(false)
    }, 500)
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
            <ListOfExpense expenses={expenses}  />
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
        />
      )}
    </div>
  )
}

export default App
