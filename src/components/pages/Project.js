import { parse, v4 as uuidv4 } from 'uuid'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function Project() {
  let { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [services, setServices] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch(`http://localhost:4000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
            setServices(data.services)
          }),
      0,
    )
  }, [id])

  function editPost(project) {
    // budget validation
    if (project.budget < project.cost) {
      setMessage('O Orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:4000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(!showProjectForm)
        setMessage('Produto atualizado atualizado!')
        setType('success')
      })
  }

  function createService(project) {
    // last service
    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setType('error')
      project.services.pop()
      return false
    }

    // add service cost to project cost total
    project.cost = newCost

    fetch(`http://localhost:4000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services)
        setShowServiceForm(!showServiceForm)
        setMessage('Produto adicionado!')
        setType('success')
      })
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id,
    )

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:4000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated)
        setServices(servicesUpdated)
        setMessage('Produto removido com sucesso!')
      })
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Produto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar Produto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.form}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Quantidade total:</span> {project.budget}
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project
