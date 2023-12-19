'use client';

import CakeView from './components/CakeView';
import IceCreamView from './components/IceCreamView';
import UserView from "./components/UserView";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="font-bold text-2xl mb-2">Redux Toolkit App</div>

      <div className="flex max-w-5xl lg:flex font-mono">
        <div className="w-1/2 bg-gray-300 p-4 m-1">
        <CakeView/>
        </div>
        <div className="w-1/2 bg-gray-300 p-6 m-1">
        <IceCreamView/>
        </div>
      </div>

      <div className="flex max-w-5xl lg:flex font-mono mt-10">
        <UserView/>
      </div>
      
    </main>
  )
}
