'use client';
import SummonDuckWrapper from './components/SummonDuckWrapper';

export default function Home() {
  return (
    <main>
      <div className='fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-sm font-semibold text-center
                      mobile:text-2xl superMobile:text-md'>
        <p>Spawn ducks until you can't or stop when there's too many ducks!</p>
      </div>
      <SummonDuckWrapper />
    </main>
  )
}
