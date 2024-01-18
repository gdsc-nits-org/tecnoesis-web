
const Form = () => {
  return (
    <div>
        <h1>Form</h1>
        <form action="">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="Phone Number" />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Username" />
            <label htmlFor="scholarId">Scholar Id</label>
            <input type="text" name="scholarId" id="scholarId" placeholder="Scholar Id" />
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Form
