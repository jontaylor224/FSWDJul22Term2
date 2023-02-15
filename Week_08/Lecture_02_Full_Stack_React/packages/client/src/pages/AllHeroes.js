import axios from '../utils/axiosConfig';
import { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  heroes: [],
  isLoading: true,
  showModal: false,
  heroToDelete: null
}

const AllHeroes = () => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    axios.get('heroes')
      .then(res => {
        setTimeout(() => {
          setState({
            ...state,
            heroes: res,
            isLoading: false,
            error: null
          })
        }, 1500)
      })
      .catch(err => {
        setState({
          ...state,
          isLoading: false
        })
      })
  }, [])

  const handleOpenModal = (id) => setState({ ...state, showModal: true, heroToDelete: id })
  const handleCloseModal = () => setState({ ...state, showModal: false, heroToDelete: null })

  const handleDelete = () => {
    axios.delete(`heroes/${state.heroToDelete}`)
      .then(res => {
        toast.success("Successfully deleted.")
        setState({
          ...state,
          heroes: state.heroes.filter((hero) => hero.id !== state.heroToDelete),
          showModal: false,
          heroToDelete: null
        })
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          setState({
            ...state,
            heroes: state.heroes.filter((hero) => hero.id !== state.heroToDelete),
            showModal: false,
            heroToDelete: null
          })
        }
      })
  }

  return (
    <Container fluid>
      {
        state.isLoading ?
          <p>Loading, please wait...</p>
          :
          state.heroes.length > 0 ?
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  state.heroes.map((hero) => (
                    <tr key={`hero_${hero.id}`}>
                      <td><Link to={`/heroes/${hero.id}`}>{hero.name}</Link></td>
                      <td><Button variant="danger" onClick={() => handleOpenModal(hero.id)}>Delete</Button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            :
            <p>Data could not be retrieved.</p>
      }

      <Modal show={state.showModal} onHide={handleCloseModal}>
        <Modal.Body>Are you sure you want to delete {state.heroToDelete ? state.heroes.find((hero) => hero.id === state.heroToDelete).name : ''}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Confirm Delete</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default AllHeroes