import { useState, useEffect } from 'react';
import Header from './components/Header'
import { api } from './services/API';

function App() {
  const [contacts, setContacts] = useState([])

  const [name, setName] = useState('')

  useEffect(async () => {
    handleLoadContacts()
  });

  async function handleLoadContacts() {
    const { data: response } = await api.get('/contacts')
    setContacts(response.data.contacts)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/contacts', { name })

    if (response.data.message) {
      handleLoadContacts()
      setName('')
    }
  }

  return (
    <>
      <Header />
      <section>
        <article>
          <h2>Novo contato </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact">Nome do Contato</label>
              <input type="text" className="form-control" name="contact" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="enviar">
              <button type="submit" className="btn btn-success">Salvar</button>
            </div>
          </form>
        </article>

        <article className="contacts">
          {
            contacts.map((contact) => (
              <p
                key={contact.id}
              >{contact.name}</p>
            ))
          }
        </article>
      </section>
    </>
  )
}

export default App
