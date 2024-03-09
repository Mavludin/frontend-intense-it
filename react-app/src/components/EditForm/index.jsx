// Управляемые и неуправляемые компоненты

export const EditForm = ({ selectedUser, editUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    editUser({
      id: selectedUser.id,
      name: e.target.name.value,
      age: e.target.age.value,
    })
  };

  return (
    <div className="app">
      <h2>Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={selectedUser.name}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          defaultValue={selectedUser.age}
          required
        />

        <button>Сохранить</button>
      </form>
    </div>
  );
};
