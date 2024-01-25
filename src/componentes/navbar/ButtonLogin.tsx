import { Component } from 'react'
import LoginIcon from '../icons/LoginIcon'

export default class ButtonLogin extends Component {
  render() {
    return (
      <div className="mr-2 h-4/6 flex justify-center px-3 text-sky-400 rounded gap-2 cursor-pointer duration-200 hover:bg-slate-100 items-center">
      <a href='home'>Login</a>
      <LoginIcon />
    </div>
    )
  }
}
