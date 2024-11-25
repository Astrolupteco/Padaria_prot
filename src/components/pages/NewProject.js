import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'
import LinkButton from '../layout/LinkButton'
function NewProject() {
  const history = useHistory()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:4000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/projects', { message: 'Produto criado com sucesso!' })
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Adicionar Produto</h1>

      <p>Crie e adicione seu produto <LinkButton to="/projects" text="Meus Produto" /></p>

      <ProjectForm handleSubmit={createPost} btnText="Criar Produto" />

    </div>
  )
}

export default NewProject
