import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d141c]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">Mani</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link href="/dashboard" className="text-[#0d141c] text-sm font-medium leading-normal">Overview</Link>
            <Link href="/transactions" className="text-[#0d141c] text-sm font-medium leading-normal">Transactions</Link>
            <Link href="/budgets" className="text-[#0d141c] text-sm font-medium leading-normal">Budgets</Link>
            <Link href="/goals" className="text-[#0d141c] text-sm font-medium leading-normal">Goals</Link>
            <Link href="/reports" className="text-[#0d141c] text-sm font-medium leading-normal">Reports</Link>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9WoQvHTKD909_N416xt8Jo_hxpfOHhQ00HzTbVExloHDqJGO0LXDbaPGcdR1DGjHF9JgGmFc3Aze7yjEYDQJhcBuRpwwzdXCNT_mj37AlOVZAgAdE5Q20bv6iP529idGn8ZLnXeWttn1O_MJxUv583t9hWZwAs2DSBf8qTwcCp2Jg-cLMu6CAmDnQ1kMIWZLkY1OVMOh4vHCkEWEcAjrMl_uK6UK9MeVWoBwVRL6WcvuRbi2VWxnCAUAZk0Fr5v_qWgP3mA9_0s0")'
            }}
          ></div>
        </div>
      </header>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[960px] py-5">
          <h2 className="text-[#0d141c] tracking-light text-[28px] font-bold leading-tight px-4">Welcome to your Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
              <p className="text-2xl font-bold text-[#0c7ff2]">$12,345.67</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Monthly Savings</h3>
              <p className="text-2xl font-bold text-[#0c7ff2]">$1,234.56</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Investment Returns</h3>
              <p className="text-2xl font-bold text-[#0c7ff2]">$567.89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 