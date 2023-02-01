import React from 'react'
import { moneyFormat, dateFormat } from '../utils'
import IconSaving from '../assets/img/icono_ahorro.svg'
import IconHome from '../assets/img/icono_casa.svg'
import IconFood from '../assets/img/icono_comida.svg'
import IconExpense from '../assets/img/icono_gastos.svg'
import IconOcio from '../assets/img/icono_ocio.svg'
import IconHealth from '../assets/img/icono_salud.svg'
import IconSuscriptions from '../assets/img/icono_suscripciones.svg'

const iconsDictionaty = {
  ahorro: IconSaving,
  casa: IconHome,
  comida: IconFood,
  gasto: IconExpense,
  ocio: IconOcio,
  salud: IconHealth,
  suscripciones: IconSuscriptions
}

const Expense = ({ expense }) => {
  const { name, amount, category, date } = expense
  return (
    <div className='flex items-center gap-4 p-4 border border-indigo-200 shadow-lg rounded-md w-100'>
      <img
        src={iconsDictionaty[category]}
        alt='icon category'
        className='w-20'
      />

      <div className='flex flex-col mt-3 flex-1 border-l-2 pl-1'>
        <p className='text-xs text-gray-400'>{dateFormat(date)}</p>
        <p className='text-sm text-gray-400 uppercase'>{category}</p>
        <p className='text-xl text-gray-600 mt-2 font-semibold'>{name}</p>
      </div>
      <p className='text-indigo-600 text-xl font-semibold flex-1 text-right'>
        {moneyFormat(amount)}
      </p>
    </div>
  )
}

export default Expense
