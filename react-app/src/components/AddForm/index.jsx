// Управляемые и неуправляемые компоненты

export const AddForm = ({ addNewUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    addNewUser({
        name: e.target.name.value,
        age: e.target.age.value
    })
  };

  return (
    <div className="app">
      <h2>Add Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />

        <input type="number" name="age" placeholder="Age" required />

        <button>Добавить</button>
      </form>
    </div>
  );
};
