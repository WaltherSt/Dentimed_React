import { Component } from 'react'
import AgendarIcon from '../icons/AgendarIcon'
import BillIcon from '../icons/BillIcon'
import CalendarIcon from '../icons/CalendarIcon'
import HistoryIcon from '../icons/HistoryIcon'
import InventoryIcon from '../icons/InventoryIcon'
import PatientIcon from '../icons/PatientIcon'
import Logo from '../navbar/Logo'
import ItemMenu from './ItemMenu'

export default class Menu extends Component {
  render() {
    return (

      <div className=' flex flex-col w-72 shadow-xl h-lvh'>
        <div className='py-2 border-b-2 border-dentimed-blue flex w-full justify-center'>
          <Logo/>
        </div>
        <ItemMenu icon={<AgendarIcon/>} name='Agenda'/>
        <ItemMenu icon={<CalendarIcon/>} name='Calendario'/>
        <ItemMenu icon={<PatientIcon/>} name='Pacientes'/>
        <ItemMenu icon={<InventoryIcon/>} name='Inventario'/>
        <ItemMenu icon={<BillIcon/>} name='Facturación'/>
        <ItemMenu icon={<HistoryIcon/>} name='Historia Dental'/>



      </div>

    )
  }
}
