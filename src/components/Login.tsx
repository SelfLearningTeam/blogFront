const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-indigo-400 p-6 w-1/2'>
        <h1 className='text-2xl'>Login</h1>
        <form className='space-y-3'>
          <div>
            <label className='block mb-2 font-bold' htmlFor="email">Имайл</label>
            <input className='border border-gray-400 p-3' type="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Нүүц үг</label>
            <input placeholder="Password" />
          </div>
          <div>
            <button>Нэвтрэх</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
