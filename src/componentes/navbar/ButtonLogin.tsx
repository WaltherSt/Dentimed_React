import { Component } from 'react'
import LoginIcon from '../icons/LoginIcon'

export default class ButtonLogin extends Component {
  render() {
    return (
      <div className="mr-5 h-4/5 flex justify-center p-2 text-sky-400 rounded gap-1 cursor-pointer duration-200 hover:bg-slate-100">
      <a className="">Login</a>
      <LoginIcon />
    </div>
    )
  }
}
