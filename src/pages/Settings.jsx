function Settings() {
  return (
    <section>
      <h1>Settings</h1>

      <div className='settings_list'>
        <label>
          <input type='checkbox' /> Randomize questions
        </label>

        <label>
          Question set{' '}
          <select>
            <option>Set 1</option>
            <option>Set 2</option>
          </select>
        </label>

        <label>
          <input type='checkbox' /> Dark mode
        </label>

        <label>
          Language{' '}
          <select>
            <option>FI</option>
            <option>EN</option>
          </select>
        </label>
      </div>

      <h2>About</h2>
      <p>[short about text]</p>
    </section>
  )
}

export default Settings
